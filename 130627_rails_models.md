# Rails models

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