# Bundler

Bundler maintains a consistent environment for ruby applications. It tracks an application's code and the rubygems it needs to run, so that an application will always have the exact gems (and versions) that it needs to run.

#Using Bundler with Sinatra

To use bundler with a Sinatra application, you only need to do two things. First, create a Gemfile.

```bash
gem 'sinatra'
```
Then, set up your config.ru file to load the bundle before it loads your Sinatra app.

```ruby
require 'rubygems'
require 'bundler'

Bundler.require

require './my_sinatra_app'
run MySinatraApp
```

Start your development server with rackup, and Sinatra will be loaded via Bundler.

```bash
$ rackup
```

#`bundle exec` vs `bundle`
`bundle exec` executes a command in the context of your bundle.

That means it uses the gems specified in your Gemfile. Much of the time, running `bundle exec rake foo` has the same results as if you just ran `rake foo`, especially if you have the same gems installed system-wide as in your Gemfile. However, some applications may specify different versions of gems than the ones you have installed system-wide, and may want those exact gems and versions to be able to run correctly. If you just run without bundle exec, you may get some weird errors.

Using bundle exec guarantees that the program is run with the environment specified in the gemfile, which hopefully means it is the environment that the creators of the program want it to be run in, which hopefully means it should run correctly no matter what weird setup you have on your computer.

It basically standardizes the environment under which the program is run. This helps avoid version hell and makes life much easier.