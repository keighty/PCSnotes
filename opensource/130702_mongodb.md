# Mongodb
```bash
$ brew install mongodb
.
########## 100.0%
==> Caveats
To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
    mongod
==> Summary
🍺  /usr/local/Cellar/mongodb/2.4.4-x86_64: 20 files, 286M, built in 2.4 minutes
...
$ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
/Users/katie/Library/LaunchAgents/homebrew.mxcl.mongodb.plist -> /usr/local/opt/mongodb/homebrew.mxcl.mongodb.plist
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```

###Launch
```bash
$ mongod
```