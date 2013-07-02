# Asset pipeline rails

###Asset Directories
*`app/assets`: assets specific to the present applications
*`lib/assets`: assets for libraries written by your dev team
*`vendor/assets`: assets from third party vendors

Each of these directories has a similar tree:
```ruby
$ tree app/assets/
app/assets/
├── images
│   └── rails.png
├── javascripts
│   ├── application.js
│   └── static_pages.js.coffee
└── stylesheets
    ├── application.css
    ├── config.rb
    ├── custom.css.scss
    └── static_pages.css.scss
```
###Manifest files tell Rails how to combine assets

in /app/assets/stylesheets/application.css
```ruby
/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or vendor/assets/stylesheets of plugins, if any, can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the top of the
 * compiled file, but it's generally better to create a new file per style scope.
 *
 *= require_self
 *= require_tree .
 */
 ```

###Preprocessors use the Manifest files to combine the assets
We tell Rails which preprocessors to use with file extensions:
*`custom.css.scss`: uses Sass
*`foobar.js.coffee`: uses coffeescript
*`foobar.js.erb.coffee`: uses coffeescript AND Erb

Production level processing rolls everything into single files for use:

all css files get rolled into application.css

all js files get rolled into javascripts.js

Everything is minified

