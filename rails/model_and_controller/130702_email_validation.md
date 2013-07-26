# Email validation

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
