# Default_scope

```ruby
class Micropost < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order('created_at DESC') }
  validates :user_id, presence: true
end
```
the `default_scope ->` is a proc which takes in a block and then evaluates it when called with the `call` method

```bash
$ irb
> -> {puts 'foo'}
 => #<Proc:0x007f84cbaaab20@(irb):1 (lambda)>
> -> {puts 'foo'}.call
foo
 => nil
> x = -> { puts "I am a proc" }
 => #<Proc:0x007f84cba81478@(irb):3 (lambda)>
> x.call
I am a proc
 => nil
>
```