# Password encryption

We’ll use the state-of-the-art hash function called bcrypt to irreversibly encrypt the password to form the password hash. To use bcrypt in the sample application, we need to add the bcrypt-ruby gem to our Gemfile

```ruby
source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '4.0.0'
gem 'bootstrap-sass', '2.3.2.0'
gem 'bcrypt-ruby', '3.0.1'
```

```bash
$ bundle
```

We expect to have users confirm their passwords, a common practice on the web meant to minimize typos. We could enforce this at the controller layer, but it’s conventional to put it in the model and use Active Record to enforce the constraint. The method is to add password and password_confirmation attributes to the User model, and then require that the two attributes match before the record is saved to the database. Unlike the other attributes we’ve seen so far, the password attributes will be virtual—they will only exist temporarily in memory, and will not be persisted to the database. These virtual attributes are implemented automatically by has_secure_password.

