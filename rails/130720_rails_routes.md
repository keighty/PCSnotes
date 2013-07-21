# Rails routes
```
<%= link_to "Visit other site", "http://gravatar.com/emails", :target => "_blank" %>
```

Creates classes and ids for css
```
link_to "Articles", articles_path, :id => "news", :class => "article"
# => <a href="/articles" class="article" id="news">Articles</a>
```

You can use a block as well if your link target is hard to fit into the name parameter. ERB example:
```
<%= link_to(@profile) do %>
  <strong><%= @profile.name %></strong> -- <span>Check it out!</span>
<% end %>
# => <a href="/profiles/1">
       <strong>David</strong> -- <span>Check it out!</span>
     </a>
```