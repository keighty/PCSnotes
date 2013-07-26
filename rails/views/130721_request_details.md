# Request details

##ActionDispatch::Request
Investigate the content and structure of the request object in the view object

```bash
<%= debug(params)               if Rails.env.development? %>
<%= debug(request.flash)        if Rails.env.development? %>
<%= debug(request.body)         if Rails.env.development? %>
<%= debug(request.cookie_jar)   if Rails.env.development? %>
<%= debug(request.full_path)    if Rails.env.development? %>
<%= debug(request.original_url) if Rails.env.development? %>
<%= debug(request.method)       if Rails.env.development? %>
```

Use the request object in the controller's control statements:
```ruby
def signed_in_user
  if signed_in? && request.url == new_user_url
    redirect_to root_path, notice: "You are already signed in."
  end
...
end
```