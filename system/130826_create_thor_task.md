# Create thor task

### define a thor task
```
class Note < Thor
  desc "create", "creates a notes file in markdown"
  def create(title="new note")
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
end
```

### Install a thor task
```
$ thor install notes.thor
...
Do you wish to continue [y/N]? y
Please specify a name for notes.thor in the system repository [notes.thor]:
Storing thor file in your system repository
```