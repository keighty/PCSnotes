# Using partials in sinatra
###Background
I was refactoring some html in my JSGames sinatra application and I found some duplication.

###Problem
I wanted to include the same description on both the solitaire home page and the index page.

###Solution
1. factor out the duplicate html into a partial (begin name with _ for identification purposes)
2. wherever you want to display this snippet of code add this:
```ruby
<%= erb :_filename  %>
```
