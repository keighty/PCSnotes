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
we shouldn’t allow name and email to be just any strings; we should enforce certain constraints on their values. Active Record allows us to impose such constraints using validations:

```ruby
class User < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
end
```

#####Uniqueness Validation

Using validates :uniqueness does not guarantee uniqueness.

D’oh! But what can go wrong? Here’s what:

*Alice signs up for the sample app, with address alice@wonderland.com.
*Alice accidentally clicks on “Submit” twice, sending two requests in quick succession.
*The following sequence occurs: request 1 creates a user in memory that passes validation, request 2 does the same, request 1’s user gets saved, request 2’s user gets saved.
*Result: two user records with the exact same email address, despite the uniqueness validation.

If the above sequence seems implausible, believe me, it isn’t: it can happen on any Rails website with significant traffic. Luckily, the solution is straightforward to implement; we just need to enforce uniqueness at the database level as well. Our method is to create a database index on the email column, and then require that the index be unique.

###How do we ensure email uniqueness?
1. in the model:
`validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }`
2. in database, add an index:
```ruby
class AddIndexToUsersEmail < ActiveRecord::Migration
  def change
    add_index :users, :email, unique: true
  end
end
```
3. DOWNCASE BEFORE YOU SAVE
```ruby
class User < ActiveRecord::Base
  before_save { self.email = email.downcase }
...
```
Place the following lines in the Micropost model to restrict the length of the micropost:
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

### Creating multi-key index
```ruby
class CreateMicroposts < ActiveRecord::Migration
  def change
    create_table :microposts do |t|
      t.string :content
      t.integer :user_id

      t.timestamps
    end
    add_index :microposts, [:user_id, :created_at]
  end
end
```
`[:user_id, :created_at]` tells rails to use both keys at the same time

`created_at` and `updated_at` are “magic” columns, automatically set to the proper creation and update timestamps, so any explicit initialization values are overwritten by the magic.
