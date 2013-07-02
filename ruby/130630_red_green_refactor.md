# Red green refactor workflow for rails

##Red
Write a failing test:
```ruby
describe "Static About page" do
  it "should have the content 'About Us'" do
    visit '/static_pages/about'
    page.should have_content('About Us')
  end
end
```
##Green
Use the failures to drive development:

********************

```
Failures:

  1) Static About page should have the content 'About Us'
     Failure/Error: visit '/static_pages/about'
     ActionController::RoutingError:
       No route matches [GET] "/static_pages/about"
```
* No route? Add one to /config/routes.rb:

```ruby
DemoApp2::Application.routes.draw do
  get "static_pages/about"
  ...
end
```

*******************

```
Failures:

  1) Static About page should have the content 'About Us'
     Failure/Error: visit '/static_pages/about'
     AbstractController::ActionNotFound:
       The action 'about' could not be found for StaticPagesController
```
* No controller action? Add one to /controllers/static_pages_controller.rb

```ruby
class StaticPagesController < ApplicationController
  def about
  end
end
```

********************

```
Failures:

  1) Static About page should have the content 'About Us'
     Failure/Error: visit '/static_pages/about'
     ActionView::MissingTemplate:
       Missing template static_pages/about, application/about with {:locale=>[:en], :formats=>[:html], :handlers=>[:erb, :builder, :raw, :ruby, :jbuilder, :coffee]}. Searched in:
         * "/Users/katie/Dropbox/PCS/railsStuff/demo_app2/app/views"
```
* No page? Add a view to /static_pages/about.html.erb

```
<!DOCTYPE html>
  <body>
    <h1>About Us</h1>
  </body>
</html>
```