# Pg start to migrate

1. `brew install postgresql` - installs postgresql via homebrew
2. `initdb /usr/local/var/postgres -E utf8` - initializes the database
3. `brew install lunchy` - install lunchy for managing postgres
4. `cp /usr/local/Cellar/postgresql/9.2.4/homebrew.mxcl.postgresql.plist  ~/Library/LaunchAgents/` - install a launch agent
5. `lunchy start postgres` - start postgresql
6. check path to postgres
```bash
$ which pg_ctl
/usr/local/bin/pg_ctl
```

7. Get your $PATH in order
```bash
$ cat ~/.bashrc | grep PATH
PATH=/usr/bin:/usr/local/bin:$PATH:$HOME/.rvm/bin
```

Make sure that your `/usr/local/bin` comes BEFORE your `/usr/bin` to ensure you are calling the right path for postgres. You can do this by changing

` PATH=/usr/bin:/usr/local/bin:$PATH:$HOME/.rvm/bin` to `PATH=/usr/local/bin:/usr/bin:$PATH:$HOME/.rvm/bin`
```
The database you created above includes your computer account user name as the superuser. Check the name of the superuser by creating a database and asking about the users:

```bash
$ createdb test
$ psql test
psql (9.2.4)
Type "help" for help.
.
test=# \du
                             List of roles
 Role name |                   Attributes                   | Member of
-----------+------------------------------------------------+-----------
 gary     | Superuser, Create role, Create DB, Replication | {}
.
test=#\q
```

`\du` lists all the users for the system
`\q` quits the postgres terminal

## log in to your main postgres database to create a new user
```bash
$ psql template1 -U gary
psql (9.2.4)
Type "help" for help.
.
template1=# \du
                             List of roles
 Role name |                   Attributes                   | Member of
-----------+------------------------------------------------+-----------
 gary     | Superuser, Create role, Create DB, Replication | {}
.
template1=# CREATE USER myuser WITH PASSWORD 'foobar';
CREATE ROLE
template1=# \du
                             List of roles
 Role name |                   Attributes                   | Member of
-----------+------------------------------------------------+-----------
 myuser     |                                                | {}
 gary     | Superuser, Create role, Create DB, Replication | {}
template1=# CREATE DATABASE mydb;
CREATE DATABASE
.
template1=# GRANT ALL PRIVILEGES ON DATABASE mydb to aUser;
GRANT
.
template1=# \q
```

# check that the user was successfully created and can log in to the databases
```bash
$ psql -d mydb -U auser
psql (9.2.4)
Type "help" for help.
.
mydb=> \q
```

# list all the available databases
```bash
$ psql -l
                                List of databases
     Name     | Owner | Encoding |   Collate   |    Ctype    | Access privileges
--------------+-------+----------+-------------+-------------+-------------------
 db/topscores | gary | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 mydb    | gary | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =Tc/gary        +
              |       |          |             |             | gary=CTc/gary  +
              |       |          |             |             | auser=CTc/gary
 postgres     | gary | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0    | gary | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/gary         +
              |       |          |             |             | gary=CTc/gary
 template1    | gary | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/gary         +
              |       |          |             |             | gary=CTc/gary
(5 rows)
```

# add the user and password to your bashrc (environment variables)
in ~/.bashrc
```bash
export PG_USER=auser
export PG_PASS=foobar
```

# add the database to your project
### Gemfile
```ruby
source "https://rubygems.org"
gem "sinatra"
gem "activerecord"
gem "sinatra-activerecord"
gem "pg"
```
### app.rb
```ruby
require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'
require './models/model'
...
get '/' do
  "Hello World!"
end
```

### config.ru
```ruby
require './app'
run Sinatra::Application
```

### config/databases.yml
```ruby
development:
  adapter: postgresql
  database: highscore
  username: <%= ENV['PG_USER'] %>
  password: <%= ENV['PG_PASS'] %>
  host: localhost
```

### config/environments.rb
```ruby
configure :production, :development do
  db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')
#
  ActiveRecord::Base.establish_connection(
      :adapter => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
      :host     => db.host,
      :username => db.user,
      :password => db.password,
      :database => db.path[1..-1],
      :encoding => 'utf8'
  )
end
```

### Rakefile
```ruby
require './app'
require 'sinatra/activerecord/rake'
```

### models/model.rb
```ruby
class Model < ActiveRecord::Base
end
```

# create a table migration
```bash
$ rake -T
rake db:create_migration  # create an ActiveRecord migration
rake db:migrate           # migrate the database (use version...
rake db:rollback          # roll back the migration (use step...
rake db:schema:dump       # dump schema into file
rake db:schema:load       # load schema into database
$ rake db:create_migration NAME=create_model
```

# add details to generated migration
```ruby
class CreateModel < ActiveRecord::Migration
  def up
    create_table :models do |t|
      t.string :name
    end
  end
.
  def down
    drop_table :models
  end
end
```

# run the migration
```bash
$ rake db:migrate
==  CreateModel: migrating ====================================================
-- create_table(:models)
   -> 0.0232s
==  CreateModel: migrated (0.0234s) ===========================================
```