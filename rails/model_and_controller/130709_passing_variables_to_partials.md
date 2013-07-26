# Passing variables to partials

Refactoring a few views in Rails had me wondering how to pass information into a rendered partial view.

The problem: the edit and new user forms have the same form but different submit button text:

```ruby
<%= form_for(@user) do |f| %>
  <%= render 'shared/error_messages' %>

  <%= f.label :name %>
  <%= f.text_field :name %>

  <%= f.label :email %>
  <%= f.text_field :email %>

  <%= f.label :password %>
  <%= f.password_field :password %>

  <%= f.label :password_confirmation, "Confirm Password" %>
  <%= f.password_field :password_confirmation %>

  <%= f.submit "Save changes", class: "btn btn-large btn-primary" %>
<% end %>
```
The new user form button says "Create my account".

The edit user form button says "Save changes".

###1. refactor into a partial
Save the form into `layouts/_form.html.erb"

###2. remove the form from edit.html.erb and replace with:
```ruby
<%= render partial: 'layouts/form', locals: { button_text: "Save changes" }  %>
```

###3. change the _form.html.erb to accept the value of button_text instead of a string:
```ruby
<%= f.submit button_text, class: "btn btn-large btn-primary" %>
```

###4. repeat for new.html.erb, but use:
```ruby
<%= render partial: 'layouts/form', locals: { button_text: "Create my account" }  %>
```