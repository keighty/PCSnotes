# Rails routes
Make URL mappings in config/routes.rb:
```ruby
SampleApp::Application.routes.draw do
  root to: 'static_pages#home'
  match '/help',    to: 'static_pages#help',    via: 'get'
  match '/about',   to: 'static_pages#about',   via: 'get'
  match '/contact', to: 'static_pages#contact', via: 'get'
  .
  .
  .
end
```

change `get 'static_pages/help'` to `match '/help', to: 'static_pages#help', via: 'get'`

for `root_path` add `root to: 'static_pages#home'

navigate to [localhost:3000/](localhost:3000/) to view the new mappings.

###Note
Rails routes read top to bottom, so don't use wildcards in routes
```ruby
match '/*'
```


