# Static pages in demo_app2 rails

###Create a rails project
```ruby
$ rails new demo_app2 --skip-test-unit
$ cd demo_app2
```
This skips creating a test directory

###Add these to the Gemfile
```ruby
ruby '2.0.0'

group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :test do
  gem 'capybara'
end
```
###Specify RSpec and create test unit
```
$ rails generate rspec:install
      create  .rspec
      create  spec
      create  spec/spec_helper.rb
$ tree spec
spec
└── spec_helper.rb
0 directories, 1 file
```

###Static pages with Rails
Rails _actions_ are a powerful way to define URIs

Controllers contain actions related by a common purpose.

Checkout a new branch so that we can work with our files without changing  the master
```
$ git checkout -b static_pages
$ git branch
  master
* static-pages
```

Rails will generate the controller architecture automatically:
```
$ rails generate controller StaticPages home help --no-test-framework
      create  app/controllers/static_pages_controller.rb
       route  get "static_pages/help"
       route  get "static_pages/home"
      invoke  erb
      create    app/views/static_pages
      create    app/views/static_pages/home.html.erb
      create    app/views/static_pages/help.html.erb
      invoke  helper
      create    app/helpers/static_pages_helper.rb
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/static_pages.js.coffee
      invoke    scss
      create      app/assets/stylesheets/static_pages.css.scss
```
Rails creates the 'get' routes corresponding to the actions we specified (help and home) inside config/routes.rb.

#4 HTTP-verbs
* GET -- read
* POST -- submit (create)
* PUT -- update
* DELETE -- destroy

Notice that inside app/controllers/static_pages_controller.rb rails has added our specified methods (help and home)
```ruby
class StaticPagesController < ApplicationController
  def home
  end

  def help
  end
end
```
When visiting the URI /static_pages/home, rails looks at the StaticPages controller and executes the code in the home action, and then renders the view corresponding to the action.

The view corresponding to this controller is found in /views/static_pages/home.html.erb

# Generate RSpec tests
```
$ rails generate integration_test static_pages
      invoke  rspec
      create    spec/requests/static_pages_spec.rb
```
### Add some tests
```ruby
require 'spec_helper'

describe "Static Home page" do
  it "should have the content StaticPages#home" do
    visit '/static_pages/home'
    page.should have_content('StaticPages#home')
  end
end
```
### Get Capybara tests to work
Have to include capybara in spec_helper.rb:
```ruby
RSpec.configure do |config|
  config.include Capybara::DSL
  ...
end
```
### Run tests
```
$ bundle exec rspec spec/requests/static_pages_spec.rb
```