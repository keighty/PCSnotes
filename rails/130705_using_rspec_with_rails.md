# Using rspec with rails
```bash
$ rails new MyApp --no-test-framework
```
Add these to Gemfile
```ruby
group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  gem 'rspec-rails'
end

group :test do
  gem 'selenium-webdriver'
  gem 'capybara'
  gem 'cucumber-rails', :require => false
  gem 'database_cleaner'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end
```

```bash
$ bundle
$ rails generate rspec:install
$ rails generate cucumber:install
```

To add a test suite for the item you are building:
```bash
$ rails generate controller GamePages play help scores --no-test-framework
$ rails generate integration_test game_pages
```

Add Capybara to your spec_helper.rb
```ruby
RSpec.configure do |config|
  ...
  config.include Capybara::DSL
end
```