# Undoing in rails

Rails can help you recover if you make mistakes:

###Undo controller generation
```
$ rails generate controller FooBars baz quux
$ rails destroy controller FooBars baz quux
```

###Undo model generation
```
$ rails generate model Foo
$ rails destroy model Foo
```

###Undo migrations
```
$ rake db:migrate
$ rake db:rollback //rolls back one migration
$ rake db:migrate VERSION=0 //to the beginning
```

