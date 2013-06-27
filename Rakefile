require "rubygems"
require 'rake'

SOURCE = "."

# Usage: rake post title="A Title" [date="2012-02-09"]
desc "make a new post"
task :post do
  title = ENV["title"] || "new-post"
  slug = title.downcase.strip.gsub(' ', '_').gsub(/[^\w-]/, '')
  begin
    date = (ENV['date'] ?
      Time.parse(ENV['date']) : Time.now).strftime('%y%m%d')
  end
  filename = File.join("./", "#{date}_#{slug}.md")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "# #{title.gsub(/-/,' ').capitalize}"
  end
end # task :post

#Load custom rake scripts
Dir['_rake/*.rake'].each { |r| load r }
