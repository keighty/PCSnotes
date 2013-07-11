# Heroku notes and toolbelt

###Lessons Learned
1. Rails 4 does not come with a default index.html, so it looks like your application has not been deployed when it really has.
2. Heroku really doesn't like sqlite. It barfs at the end of installation if you haven't modified your gemfile
3. `heroku ps:scale web=1' is a way to scale the dynos available for your app. Free apps get 750 free dyno-hours, so having 1 is fine for testing. It will be slow for the first access because the dyno goes to sleep if it is not being used. Any more than 1, and you are paying for the service.
4. `heroku open` is a quick way to view your app in your browser
5. `heroku run <cmd>` is how to run rails processes on your heroku dyno. Examples include `heroku run rails console` and `heroku run rake db:migrate`
6. `rails server` is run by default using the webserver WEBrick. Change this by specifying in the Proc file
7. if your app crashes, check `heroku logs --tail`
8. if you want to try out a barebones heroku application:
```
$ git clone git://github.com/heroku/ruby-sample.git
$ cd ruby-sample
$ heroku create
$ git push heroku master
$ heroku open
```
`heroku config -s` shows environment vars