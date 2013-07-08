# Flash notes

consider the following code:
```ruby
class SessionsController < ApplicationController
  def create
    if user && user.authenticate(params[:session][:password])
      # Sign the user in and redirect to the user's show page.
    else
      flash[:error] = 'Invalid email/password combination' # Not quite right!
      render 'new'
    end
  end
```

What is wrong with displaying a flash message this way?

The contents of the flash persist for one request, but unlike a redirect, re-rendering a template with render doesn’t count as a request, so the flash message will persist for one request longer than we want it too.

instead of flash we use flash.now, which is specifically designed for displaying flash messages on rendered pages; unlike the contents of flash, its contents disappear as soon as there is an additional request.

```ruby
...
else
  flash.now[:error] = 'Invalid email/password combination'
  render 'new'
end
```