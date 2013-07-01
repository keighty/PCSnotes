# Sinatra is easy

Stick this in a myapp.rb:

```ruby
require 'sinatra'

get '/hi' do
  "Hello World!"
end
```

Run the app:
```
$ ruby myapp.rb
```

Navigate to [localhost:4567/hi](localhost:4567/hi)

Do this for all of your routes:
```ruby
get '/' do
  .. show something ..
end

post '/' do
  .. create something ..
end

put '/' do
  .. replace something ..
end

patch '/' do
  .. modify something ..
end

delete '/' do
  .. annihilate something ..
end

options '/' do
  .. appease something ..
end

link '/' do
  .. affiliate something ..
end

unlink '/' do
  .. separate something ..
end
```