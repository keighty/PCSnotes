# Eliminate bundle exec

Running commands with `bundle exec...` ensures that the programs run in the exact gem environment specified by the Gemfile.

###RVM Bundler Integration
configure rvm to include proper executables automatically in the local environment.

```
$ rvm get head && rvm reload
$ chmod +x $rvm_path/hooks/after_cd_bundler
$ cd ~/rails_projects/sample_app
$ bundle install --without production --binstubs=./bundler_stubs
```
These commands combine rvm and bundler to ensure that rake and spec are automatically executed in the right env.

Since these files are specific to the local setup, add them to your .gitignore file

###Automate test runner with Guard
Guard monitors changes in the filesystem

1. add `gem 'guard-rspec'` to the gem file
2. `bundle install`
3. `bundle exec guard init rspec`
4. edit the Guardfile so that Guard will run the right tests when they are updated:
```ruby
guard :rspec, :all_after_pass => false do
...
```
5. `guard` runs guard

###Speed up tests with Spork
Guard does not monitor the config/routes.rb file

The Spork test server loads the rails environment once and maintains it in a pool of processes for running future tests.


