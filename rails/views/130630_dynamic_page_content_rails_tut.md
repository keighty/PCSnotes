# Dynamic page content rails tut

###ERb == embedded ruby

It is a template syste, for including dynamic content in web pages

```ruby
<% provide(:title, 'Home') %>
...
<h1>Rails Tutorial | <%=yield(:title) %></h1>
```

`<%...%>` indicates tha rails should call the provide function and associate te string 'Home' with the label :title (executes code)

`<%=...%>` inserts the title into the template (inserts code)

###app/views/layouts/application.html.erb
This layout is used as the framework for all the pages in the application.

```ruby
<!DOCTYPE html>
<html>
<head>
  <%= stylesheet_link_tag    "application", media: "all", "data-turbolinks-track" => true %>
  <%= javascript_include_tag "application", "data-turbolinks-track" => true %>
  <%= csrf_meta_tags %>
</head>
<body>
  <h1>Ruby on Rails Tutorial | <%=yield(:h1) %></title>

<%= yield %>

</body>
</html>
```
The `<%= yield %>` line is dynamically replaced with the content of the views