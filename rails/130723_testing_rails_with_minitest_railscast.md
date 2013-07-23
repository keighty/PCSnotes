# Testing rails with minitest railscast

#Setup
```
$ rails new store -T
$ cd store/
$ rails g scaffold product name price:decimal released_on:date
$ rake db:migrate
```

add to Gemfile

```ruby
group :test do
  gem 'minitest'
end
```
at commandline

```
$ bundle
$ mkdir test
$ touch test/minitest_helper.rb
```

in minitest_helper.rb add

```ruby
ENV['RAILS_ENV'] = 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'minitest/autorun'
```

#Writing Unit Tests
```
$ mkdir models
$ touch models/product_test.rb
```
product_test.rb

```ruby
require 'minitest_helper'
#
describe Product do
  it "includes name in to_param"
    product = Product.create!(name: "Hello World")
    product.to_param.must_equal "#{product.id}-hello-world"
  end
end
```

It should produce a failing test:
```bash
$ rake db:test:prepare
$ ruby -Itest test/models/product_test.rb
$ ruby -Itest test/models/product_test.rb
Run options: --seed 60724
# Running tests:
F
Finished tests in 0.285501s, 3.5026 tests/s, 3.5026 assertions/s.
  1) Failure:
ProductTest#test_to_param [test/models/product_test.rb:6]:
Expected: "2-hello-world"
  Actual: "2"
1 tests, 1 assertions, 1 failures, 0 errors, 0 skips
```

app/models/product.rb

```ruby
class Product < ActiveRecord::Base
  def to_param
    "#{id}-#{name.parameterize}"
  end
end
```

at commandline, the test should be passing
```bash
$ ruby -Itest test/models/product_test.rb
Run options: --seed 40239
# Running tests:
.
Finished tests in 0.538916s, 1.8556 tests/s, 1.8556 assertions/s.
1 tests, 1 assertions, 0 failures, 0 errors, 0 skips
```

#Create a rake task to run tests

/lib/tasks/minitest.rake

```ruby
require 'rake/testtask'
#
Rake::TestTask.new(test: "db:test:prepare") do |t|
  t.libs << "test"
  t.pattern = "test/**/*_test.rb"
end
#
task default: :test
```
Now you can run `rake` at the command line to run the tests

#Integration Tests
Gemfile

```ruby
group :test do
  gem 'minitest'
  gem 'capybara'
end
```
add a test folder

```bash
$ mkdir test/integration
$ touch test/integration/products_integration_test.rb
```
products_integration_test.rb

```ruby
require 'minitest_helper'
#
describe "Product integration" do
  it "shows product's name" do
    product = Product.create!(name: "tofu")
    visit product_path(product)
    page.text.must_include "tofu"
  end
end
```

These tests will fail because minitest does not understand the product_path shortcut or the visit/page commands from capybara.

In the test helper we will tell minitest how to find these methods:
test/minitest_helper.rb

```ruby
...
require 'capybara/rails'
...
class IntegrationTest < MiniTest::Spec
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  register_spec_type(/integration$/, self)
end
```

#Add Helpers tests
add a test folder

```bash
$ mkdir test/helpers
$ touch test/helpers/products_helper_test.rb
```
products_helper_test.rb

```ruby
require 'minitest_helper'
#
describe ProductHelper do
  it "converts number to currency" do
    number_to_currency(5).must_equal "$5.00"
  end
end
```

These tests will fail because minitest is not aware of the Helpers path.

In the test helper we will tell minitest how to find these methods:
test/minitest_helper.rb

```ruby
...
require 'active_support/testing/setup_and_teardown'
...
class HelperTest < MiniTest::Spec
  include ActiveSupport::Testing::SetupAndTeardown
  include ActionView::TestCase::Behavior
  register_spec_type(/Helper$/, self)
end
```

#Fancify the output with Turn
Gemfile
```ruby
group :test do
  gem 'minitest'
  gem 'capybara'
  gem 'turn'
end
```

minitest_helper.rb

```ruby
Turn.config.format = :outline
```