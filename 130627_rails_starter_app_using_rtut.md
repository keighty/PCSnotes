# Rails starter app using Heroku Tutorial

###Rails new
```
$ rails new demo_app
$ cd demo_app
```
###Setup the Gemfile
modify the Gemfile to include:
```ruby
ruby '2.0.0'
group :production do
  gem 'pg'
  gem 'rails_12factor'
end
group :development do
  gem 'sqlite3'
end
```
Rails_12factor enables static asset serving and logging on Heroku

Note: if you do not move the sqlite3 gem into the development group, you  will not be able to deploy on heroku

###Add an index.html page to the public folder
Rails 4.0.0 does not come with a static intro page! It will look like your app was not deployed because it will show the 404.html page that DOES come with rails.

### Re-install the dependencies to generate a new Gemfile.lock, and initiate a git repo
```
$ bundle install
$ git init
$ git add .
$ git commit -m "initial commit"
```
###Deploy to Heroku
```
$ heroku create
$ git push heroku master
```

###View your app on Heroku
```
$ heroku open
```

###Generating models
Generate the model required for the following table:
| Table: Users |
| Field | Type |
| name | string |
| email | string |
```
$ rails generate scaffold User name:string email:string
$ rails generate scaffold Micropost content:string user_id:integer
$ bundle exec rake db:migrate
```
Note: _id is generated automatically by Rails
Note: bundle exec ensures that we are using the right rake version

###Check out your handiwork
```
$ rails s
```
###This is what is happening behind the scenes
At localhost:3000/users :
* the browser requests the /users URI
* rails routes /users to the users controller index method
* index method asks the Users model to retrieve all users
* Users model returns an array @users
* controller passes on @users to the view
* the view renders the list as html
* the controller passes the html back to the browser

All models inherit from `ActiveRecord::Base`

All controllers inherit from `ApplicationControler`, which inherits from `ActionController::Base`

#Deploy database on Heroku
```
$ git add .
$ git commit -m "completing the app"
$ git push heroku master
...
Compiled slug size: 33.8MB
-----> Launching... done, v5
       http://fierce-depths-3555.herokuapp.com deployed to Heroku
$ heroku run rake db:migrate
```
The last command builds the database on heroku. Now you can navigate to /users or /microposts to checkout their views