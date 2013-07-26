# Rails controller

### /app/controllers/users_controller.rb
This file has methods for all the major db functions:
index, show, new, create, edit, update, destroy.

* `index` will list all users
* `show` will show user with specified id
* `new` will make a new user
* `create` also creates a new user
* `edit` will change info for specified user
* `update` also changes info
* `destroy` deletes the specified user

# Index
```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
  end
  .
  .
end
```

# View
```ruby
...
<tbody>
  <% @users.each do |user| %>
    <tr>
      <td><%= user.name %></td>
      <td><%= user.email %></td>
      <td><%= link_to 'Show', user %></td>
      <td><%= link_to 'Edit', edit_user_path(user) %></td>
      <td><%= link_to 'Destroy', user, method: :delete, data: { confirm: 'Are you sure?' } %></td>
    </tr>
  <% end %>
</tbody>
  ...
```