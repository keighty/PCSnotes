# Simpleform

light weight
does not include stylesheets
customizable and extendable
relies on rails scaffold (implemented on top of ActionView and FormHelpers) so cannot be used for sinatra

### Make a rails app
```bash
$ rails new simpleformtest -T
$ cd simpleformtest
```
### Add simple_form gem to Gemfile

```ruby
source 'https://rubygems.org'
gem 'simple_form'
gem 'country_select'
```
### Install the simple_form scaffold

```bash
bundle install
$ rails g simple_form:install
   create  config/initializers/simple_form.rb
   create  config/locales/simple_form.en.yml
   create  lib/templates/erb/scaffold/_form.html.erb
```
### Generate a migration to create a model

```bash
$ rails g scaffold User name email age:number country role
$ rake db:migrate
```
### Add model validation in /app/models/user.rb

```ruby
class User < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
end
```
### Add simple_form fields to /apps/views/user/_form.erb

```ruby
<%= simple_form_for @user do |f| %>
  <%= f.input :name %>
  <%= f.input :email  %>
  <%= f.input :age, collection: 18..60, prompt: "Select your age" %>
  <%= f.input :country, priority: [ "Canada", "United States" ]  %>
  <%= f.input :password %>
  <%= f.input :remember_me %>
  <%= f.button :submit %>
<% end %>
```