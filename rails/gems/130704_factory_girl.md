# Factory girl
Factories are a convenient way to define user objects and insert them in the database.

Factory Girl defines a domain-specific language in Ruby, in this case specialized for defining Active Record objects.

There is a trick, though -- when you are creating users with email addresses in a table where there is validation to ensure uniqueness for email addresses, you must create a `sequence` in the factory object for creating unique email addresses.


```ruby
FactoryGirl.define do
  sequence :email do |n|
    "email#{n}@example.com"
  end
  factory :user do
    name "Gordon Shumway"
    email
    password "foobar"
    password_confirmation "foobar"
  end
end
```

