# Provisioning with heroku pg

I was building an ActiveRecord database in Sinatra and tried to deploy to heroroku. I failed. my dyno kept crashing. it just wasn't finding my database.

I tried adding heroku environment variables - no dice.
I tried using pg locally - no dice

I found that heroku was not provisioning my database. There error said it couldn't find my database. How do I get a heroku database, when I am used to rails deployments doing it automatically?

1. check to see if you database is provisioned
```bash
$ heroku addons | grep POSTGRES
```
nothing was shown! there is not database
2. create a new database
```bash
$ heroku addons:add heroku-postgresql:dev
Adding heroku-postgresql:dev on js-games... done, v42 (free)
Attached as HEROKU_POSTGRESQL_GOLD_URL
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pgbackups:restore.
Use `heroku addons:docs heroku-postgresql:dev` to view documentation.
```
3. check the heroku config for your database
```bash
$ heroku config
=== js-games Config Vars
HEROKU_POSTGRESQL_GOLD_URL: postgres://tdlmeddplahhum:lS1aEeLJbxPXb3KlmjZa0D1Onv@ec2-54-227-238-21.compute-1.amazonaws.com:5432/dehb4b42epe9p6
```
4. promote the database to primary
```bash
$ heroku pg:promote HEROKU_POSTGRESQL_GOLD_URL
Promoting HEROKU_POSTGRESQL_GOLD_URL to DATABASE_URL... done
```
5. check info about the database
```bash
$ heroku pg:info
=== HEROKU_POSTGRESQL_GOLD_URL (DATABASE_URL)
Plan:        Dev
Status:      available
Connections: 1
PG Version:  9.2.4
Created:     2013-07-27 22:46 UTC
Data Size:   6.3 MB
Tables:      0
Rows:        0/10000 (In compliance)
Fork/Follow: Unsupported
```
6. push to heroku and redeploy
TADA