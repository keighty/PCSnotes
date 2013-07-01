# How to branch/merge git

### Make a branch
```
$ git checkout -b new_branch
```

Make all your changes, adding and committing as you go. When you are ready to finish...

### Commit all changes to your branch
```
$ git add .
$ git commit -m "finishing branch"
```

### Go back to master branch and merge
```
$ git checkout master
$ git merge new_branch
```

### Resolve any conflicts and push to the origin
