# Rails models
Model names are singular (ie: User).  A model represents a single user, whereas a database table consists of many users.

###Model creation
Create a migration with
```bash
$ rails generate model User name:string email:string
      invoke  active_record
      create    db/migrate/[timestamp]_create_users.rb
      create    app/models/user.rb
      invoke    rspec
      create      spec/models/user_spec.rb
$ tree db/migrate/
db/migrate/
└── 20130702222747_create_users.rb
```

###Data Model Validation
place the following lines int he Micropost model to restrict the length of the micropost:
```ruby
class Micropost < ActiveRecord::Base
  validates :content, :length => { :maximum => 140 }
end
```
![Image](img/micropostvalidation.png?raw=true)

###Table Relationships
To allow users to be related to many micropost entries, add the floowing to the user model
```ruby
class User <ActiveRecord::Base
  has_many :microposts
end
```

And this to the micropost model:
```ruby
class Micropost < ActiveRecord::Base
  belongs_to :user

  validates :content, :length => { :maximum => 140 }
end
```