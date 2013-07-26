# Rspec alt syntax
```ruby
require 'spec_helper'

describe "Static pages" do

  subject { page }

  describe "Home page" do
    before { visit root_path }

    it { should have_content('Sample App') }
    it { should have_title(full_title('')) }
    it { should_not have_title('| Home') }
  end
```
###Context
`subject { page }` give the context for the subsequent tests. After this line, all `it` statements will refer to the visited page

###Support files
`it { should have_title(full_title('')) }` calls a method `full_title()`, which is we placed in the application helper. Since our spec doesn't touch any application files, so we have to duplicate the code into a spec helper file: /spec/support/utilities.rb

```ruby
def full_title(page_title)
  base_title = "Ruby on Rails Tutorial Sample App"
  if page_title.empty?
    base_title
  else
    "#{base_title} | #{page_title}"
  end
end
```

this is a bit of code duplication, but now our spec can call this function rather than typing out the entire expected title