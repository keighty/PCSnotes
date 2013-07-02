# Partial html files

Partials are portions of html that are bundled to create a webpage

For example, put this code into app/views/layouts/_shim.html
```html
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
```
And reference it in /app/views/application.html.erb using `<%= render 'layouts/shim' %>`

Note the leading underscore on the filename _shim.html.erb; this underscore is the universal convention for naming partials, and among other things makes it possible to identify all the partials in a directory at a glance.
