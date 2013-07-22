# Rails Rack middleware
go to rails application and do `rake middleware`

```bash
$ rake middleware
use ActionDispatch::Static
use Rack::Lock
use #<ActiveSupport::Cache::Strategy::LocalCache::Middleware:0x007f9ef4a6a5a0>
use Rack::Runtime
use Rack::MethodOverride
use ActionDispatch::RequestId
use Rails::Rack::Logger
use ActionDispatch::ShowExceptions
use ActionDispatch::DebugExceptions
use ActionDispatch::RemoteIp
use ActionDispatch::Reloader
use ActionDispatch::Callbacks
use ActiveRecord::Migration::CheckPending
use ActiveRecord::ConnectionAdapters::ConnectionManagement
use ActiveRecord::QueryCache
use ActionDispatch::Cookies
use ActionDispatch::Session::CookieStore
use ActionDispatch::Flash
use ActionDispatch::ParamsParser
use Rack::Head
use Rack::ConditionalGet
use Rack::ETag
use Warden::Manager
run Bridge::Application.routes
```
When a request comes in, it will be passed down the middleware stack until it reaches the routes (the rails application). Each one adds something to the request:

## ActionDispatch::Static
* serves static files under public directory
* similar to Rack static middleware discussed in episode 317

## Rack::Lock
* included in the Rack gem
* locks the application down to a single thread
* anything before Rack::Lock can use multithreading

## \<ActiveSupport::Cache::Strategy::LocalCache::Middleware:0x007f9ef4a6a5a0>
* Object instead of a named class re:cacheing

```bash
$ rails c
>> Rails.cache.write('foo', 'bar')
=> true
>> Rails.cache.read('foo')
=> "bar"
>> Rails.cache.class
=> ActiveSupport::Cache::FileStore
>> Rails.cache.middleware.class
=> ActiveSupport::Cache::Strategy::LocalCache::Middleware
```
* (railscast 115)
* a local memory store
* flushes memory based store used internally by Rails.cache

## Rack::Runtime
* how many seconds it took to process the request

```bash
$ curl -I http://railscasts.com/
...
X-Runtime: 0.220432
...
```
## Rack::MethodOverride
* support put and delete requests
* sets the http request method based on _method parameter

## ActionDispatch::RequestId
* assigns a unique id for each request and adds header

```bash
$ curl -I http://railscasts.com/
...
X-Request-Id: 0e9ae496572a7fa32668c66e8ae5539b
...
```

## Rails::Rack::Logger
* logs beginning of request and flushes log after

## ActionDispatch::ShowExceptions && ActionDispatch::DebugExceptions
* catch exceptions and generates pretty error page messages

## ActionDispatch::RemoteIp
* captures the remote IP address for later use
* does some spoofing checks

## ActionDispatch::Reloader
* similar to Rack::Reloader episode 317
* reloads classes in development

## ActionDispatch::Callbacks
* adds simple before and after callback hook

```bash
$ rails c
>> ActionDispatch::Callbacks.before { puts "before request"}
>> app.get "/"
before request
  Article Load (0.1ms) SELECT ...
```
## ActiveRecord::Migration::CheckPending
* checks for pending database migrations

## ActiveRecord::ConnectionAdapters::ConnectionManagement
* clears active database connections

## ActiveRecord::QueryCache
* if you perform the same sql querey multiple times, it will cachhe
* ensures that the query cache is cleared after evey request

## ActionDispatch::Flash
* stores the Flash inside of a session
* sweeps all the flash messages on a request

## ActionDispatch::Session::CookieStore
* stores the session in a cookie so it persists between requests
* inherits from Rack::Session::Cookie

## ActionDispatch::Cookies
* stores cookie in the browser through set_cookie header

## ActionDispatch::ParamsParser
* parses xml yaml and json
* parses different formatted requests into the params hash

## Rack::Head
* checks if the request is a head request
* strips out response body
* only sends header data bask to user

## Rack::ConditionalGet && Rack::ETag
* sets an ETag based on response body
* if two response bodies are the same, they have the same ETag
* if the response is the same as the last time the user requested it, the body will be stripped
* work together to strip out the response body when it hasnt been modified

## Warden::Manager
* The middleware for Rack Authentication requires that there is a session upstream
* it injects an authentication object into the rack environment hash

##run Bridge::Application.routes
* our rails routes

# What about production?

```bash
$ RAILS_ENV=production rake middleware
```
## Adds
Rack::Cache middleware
* ruby gem that supports http cacheing

## Removes
no action dispatch static because uses apache to serve static pages

no action dispatch reloader because it doesn't need to reload controllers