# User authentication

Method for storing passwords:
1. take submitted password
2. encrypt it
3. compare encrypted result to the value stored in db

Even if the db is compromised, only encrypted pw will be available, not the actual pw.

###Add password_digest column to users table
1. add `bcrypt-ruby` to the Gemfile
```ruby
source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '4.0.0'
gem 'bootstrap-sass', '2.3.2.0'
gem 'bcrypt-ruby', '3.0.1'
.
.
```
2. run `bundle install`
3. generate the migration
```bash
$ rails generate migration add_password_digest_to_users password_digest:string
```
The suffix `to_users` will autogenerate the code required to change the User table (awesome rails-y stuff)

```ruby
class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
  end
end
```
4. apply the migration
```bash
$ bundle exec rake db:migrate
$ bundle exec rake test:prepare
$ bundle exec rspec spec/
```

6. add `has_secure_password` to the model
```ruby
class User < ActiveRecord::Base
  .
  .
  .
  has_secure_password
end
```
Tasks to add password:
* password and password_confirmation attributes
* require the presence of the password
* require that they match
* add an authenticate method to compare an encrypted password to the password_digest to authenticate users

All of these are accomplished in Rails 4 with one method, `has_secure_password`. As long as there is a password_digest column in the database, adding this one method to our model gives us a secure way to create and authenticate new users.