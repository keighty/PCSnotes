# Patch your way to a page

Some pages cannot be visited directly. The update user page is an example. You can't modify the url to get to an update page, you usually have to click through from the show page of a user to the edit page for that user.

Capybara and rspec can't do it either. They must follow the same route to get to the update page. Use 'patch' to issue the HTTP request directly.

```ruby
describe "submitting to the update action" do
  before { patch user_path(user) }
  specify { expect(response).to redirect_to(signin_path) }
end
```

Patch supports get, post, and delete as well.

When using one of these methods we can access the low-level `response` object, which lets us test for the server response itself.