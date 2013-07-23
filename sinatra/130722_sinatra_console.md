# Sinatra console
Options: TUX

Sinatra does not have a default console like `rails console`

###Tux
Tux is a ruby gem that generates a sinatra console:
* it reads the config.ru
* it allows you to interact with App methods
* it provides empty request and response objects to interact with models
* use `rack.actions` to view all the methods and request headers

###Basic irb
Use irb and require your main app file. You have access to all the dependencies and files that you need to check state, call methods, create objects, whatever you need.
```bash
$ irb
> require './app.rb'
 => true
> User.all
D, [2013-07-22T15:47:49.230146 #54081] DEBUG -- :   User Load (0.2ms)  SELECT "users".* FROM "users"
 => #<ActiveRecord::Relation [#<User id: 1, name: "Gordon Shumway", email: "gordon@example.com", created_at: "2013-07-22 22:45:48", updated_at: "2013-07-22 22:45:48">, #<User id: 2, name: "Fanny Eubanks", email: "fanny@example.com", created_at: "2013-07-22 22:45:48", updated_at: "2013-07-22 22:45:48">]>
>