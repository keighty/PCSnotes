# Mining for cherries with Git

Working on an experimental feature in a branch, I have found that I will often have commits I would like to keep, and commits that I wish had never happened.
Using the principle of only committing atomic changes, and enjoying the fruits of your detailed-commit-message labour, there is a way to extract the gold from the ore, so to speak.

##Locate the gold

```bash
$ git checkout form_feature_branch
$ git log --pretty=oneline
a83f4c3aa5d800f846d075748a79a326e0971f67 reorg gemfile
197964c091905a76f2172ca11fcbd49ccfb83c67 adds blog.db
a793fe00c50a5956c5e9f7be48ac5a9861b1eb95 adds forme form to edit...
8394b37494b63754f42ecaf19244fe6d8a36942f adds gitignore for db ...
c52a6fd3f1706584ce3e47abf49ed627a1e28fd3 adds bundler gem for manag...
1686664c4a98221ea04377bcbcf946e62a9f1cfa removes gems for simple...
034d309a612dcce6f10bb55f0da2e78b2f7c10b1 adds cells to project
...
```
In form_feature_branch I was testing out different implementations of form generation in erb views. I tried out simpleform, a rails gem, which required some monkeying around with cells and partial view rendering. It turned into a bit of a rabbit hole, so I found another form generation library called Forme, which has great sinatra integration. Along the way I discovered bundler as a way to manage file dependencies and did some minor refactoring of my Gemfile.

I wanted to keep the gem reorganization, the forme commit, the bundler commits and the gitignore:

```
a83f4c3aa5d800f846d075748a79a326e0971f67 reorg gemfile
a793fe00c50a5956c5e9f7be48ac5a9861b1eb95 adds forme form to edit...
c52a6fd3f1706584ce3e47abf49ed627a1e28fd3 adds bundler gem for manag...
8394b37494b63754f42ecaf19244fe6d8a36942f adds gitignore for db ...
```

Everything else is cruft.

##Extract the gold
With this list of golden commits in hand, checkout a fresh branch and cherry-pick your commits:

```bash
$ git checkout -b form_feature_additions
$ git cherry-pick a83f4c3aa5d800f846d075748a79a326e0971f67
[master form_feature_additions] reorg gemfile
 1 file changed, 4 insertions(+), 2 deletions(-)
 changed mode 100644 Gemfile
$ git cherry-pick a793fe00c50a5956c5e9f7be48ac5a9861b1eb95
[master form_feature_additions] adds forme form to edit...
...
$ git cherry-pick c52a6fd3f1706584ce3e47abf49ed627a1e28fd3
[master form_feature_additions] adds bundler gem for manag..
...
$ git cherry-pick 8394b37494b63754f42ecaf19244fe6d8a36942f
[master form_feature_additions] adds gitignore for db ...
...
```

If you look at your git status you will see

```bash
# On branch form_feature_additions
# Your branch is ahead of 'origin/master' by 4 commits.
```

##Profit
Now you can merge this branch with master, or continue fleshing out the feature on a clean branch, keeping only the good stuff and abandoning the bad, making experimentation easy.

AWESOME