# Rake tasks
---
I wanted to create a rake task to simplify creating a notes file each day, so I took a look at the Rakefile included in the [jekyll-bootstrap](http://jekyllbootstrap.com/) distribution I use for my portfolio. This is what I came up with:
```ruby
require "rubygems"
require 'rake'

SOURCE = "."

# Usage: rake post title="A Title" [date="2012-02-09"]
desc "make a new post"
task :post do
  # ENV["title"] is a command line arg!!
  #it takes the title specified on the cl
  title = ENV["title"] || "new-post"
  slug = title.downcase.strip.gsub(' ', '_').gsub(/[^\w-]/, '')
  begin
  # if the date is specified on the cl, use that, otherwise, get from system
   date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%y%m%d')
  end
  filename = File.join("./", "#{date}_#{slug}.md")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "# #{title.gsub(/-/,' ').capitalize}"
    post.puts "---"
  end
end # task :post

#Load custom rake scripts
Dir['_rake/*.rake'].each { |r| load r }
```