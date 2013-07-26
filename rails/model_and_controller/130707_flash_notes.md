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

##Flash message construction
```ruby
def signed_in_user
  redirect_to signin_url, notice: "Please sign in." unless signed_in?
end
```

This is a shortcut for setting flash[:notice] by passing an options hash to the redirect_to function. This code is equivalent to the more verbose

```ruby
unless signed_in?
  flash[:notice] = "Please sign in."
  redirect_to signin_url
end
```

The same construction works for the :error key, but not for :success.

I was wondering why, in the rails4 user controller, I couldn't modify this construction...

```ruby
def update
  respond_to do |format|
    if @user.update(user_params)
      sign_in @user
      format.html { redirect_to @user, notice: "Profile updated." }
      format.json { head :no_content }
    else
      format.html { render action: 'edit' }
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
  end
end
```

...to include success. I tried just changing line 5 to read `format.html { redirect_to @user, success: "Profile updated." }`, but my tests were still failing. They continued to fail until I gave up and inserted `flash[:success] = "Profile updated"` after line 4. Tests passed. Really? I left it for another time, but now I understand that the single line construction doesn't work for success. Now I have to figure out why.

###I figured out why...
`notice:` is a default tag for flash along with `alert:` and `status:`. `success:` is defined and accessed by us

```ruby
redirect_to root_url, notice: "You have successfully logged out."
redirect_to root_url, alert: "You're stuck here!"
redirect_to root_url, flash: { success: "Profile updated" }
```

so this construction:
```ruby
flash[:success] = "Profile updated"
format.html { redirect_to @user }
```

is the same as this one:
```ruby
format.html { redirect_to @user, flash: { success: "Profile updated" }}
```