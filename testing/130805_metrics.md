## Reek
Use reek to find code smells:

```bash
$ reek lib/quiz.rb
lib/quiz.rb -- 5 warnings:
  AnimalQuiz::Quizzer has no descriptive comment (IrresponsibleModule)
  AnimalQuiz::Quizzer#wrong has approx 10 statements (TooManyStatements)
  AnimalQuiz::Quizzer#wrong has the variable name 'entryA' (UncommunicativeVariableName)
  AnimalQuiz::Quizzer#wrong has the variable name 'entryB' (UncommunicativeVariableName)
  AnimalQuiz::Quizzer#wrong refers to question more than self (FeatureEnvy)
```

## Travis CI
Continuous integration will run your tests every time you push to master. Include a .travis.yml file:

```ruby
language: ruby
rvm:
  - 2.0.0
env:
  - DB=postgresql
before_script:
  - psql -c 'create database highscoretest' -U postgres
```

## Code Climate
Code Climate analyses ruby code on a number of metrics: complexity, code smells

Add an [OSS Repo](https://codeclimate.com/github/signup)

## Simplecov
Analyses test suite for coverage

* include `gem 'simplecov', :require => false, :group => :test` in Gemfile
* include at the top of your spec_helper
```
require 'simplecov'
SimpleCov.start
```
* creates a new folder called `coverage`
* open `coverage/index.html` for analysis of code coverage