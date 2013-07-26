# Adding bootstrap to rails

1. add to Gem file
```ruby
source 'https://rubygems.org'
ruby '2.0.0'
gem 'rails', '4.0.0'
gem 'bootstrap-sass', '2.3.2.0'
...
```
2. `$ bundle`
3. add dependency for asset pipeline compatibility
config/application.rb
```ruby
require File.expand_path('../boot', __FILE__)
.
.
.
module SampleApp
  class Application < Rails::Application
    .
    .
    .
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)
  end
end
```
4. add @import to custom css file
app/assets/stylesheets/custom.css.scss
```
@import "bootstrap";
```