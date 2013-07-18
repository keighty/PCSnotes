# Rebasing git
With the `rebase` command, you can take all the changes that were committed on one branch and replay them on another one.

In this example, you’d run the following:
```
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

It works by going to the common ancestor of the two branches (the one you’re on and the one you’re rebasing onto), getting the diff introduced by each commit of the branch you’re on, saving those diffs to temporary files, resetting the current branch to the same commit as the branch you are rebasing onto, and finally applying each change in turn.

##Do not rebase commits that you have pushed to a public repository.

