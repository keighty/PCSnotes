# Sessions and sign in
A Session is a semi-permanent connection between two computers, such as a client computer running a web browser and a server running Rails.

There are three models for session behaviour:

1. "forget" the session on browser close
2. "remember me" checkbox for persistent sessions
3. automatic remembering until a deliberate signout

Signing in creates a sessions

Signing out destroys a sessions

Sessions resource uses a _cookie_

Tasks for a signin function:

1. construct a Sessions controller
2. construct integration tests
3. construct a sign-in form
4. develop controller actions
5. add cookie-manipulation code (including remember_token attribute for User model)
6. routes

###sign-in function (sessions_helper.rb):
```ruby
module SessionsHelper
  def sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:remember_token] = remember_token
    user.update_attribute(:remember_token, User.encrypt(remember_token))
    self.current_user = user
  end
end
```
1. create a new token
2. place the unencrypted token in the browser cookies
3. save the encrypted token in the database
4. set the current user equal to the given user

Don't forget to reference your SessionHelper in your ApplicationHelper. Otherwise, your app will not know where to look for the Sessions logic.
#Cookies
Rails supplies a cookies utility that allows us to manipulate cookies as if they were a hash.
```ruby
cookies[:remember_token] = {  value: remember_token,
                              expires: 20.years.from_now.utc }
```
