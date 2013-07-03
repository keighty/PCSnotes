# Run through console
```bash
$ rails console --sandbox
> User.new
 => #<User id: nil, name: nil, email: nil, created_at: nil, updated_at: nil>
> user = User.new(name: "katie L", email:"me@example.com")
 => #<User id: nil, name: "katie L", email: "me@example.com", created_at: nil, updated_at: nil>
```

```bash
> user.save
   (0.2ms)  SAVEPOINT active_record_1
  SQL (50.0ms)  INSERT INTO "users" ("created_at", "email", "name", "updated_at") VALUES (?, ?, ?, ?)  [["created_at", Wed, 03 Jul 2013 01:22:20 UTC +00:00], ["email", "me@example.com"], ["name", "katie L"], ["updated_at", Wed, 03 Jul 2013 01:22:20 UTC +00:00]]
   (0.1ms)  RELEASE SAVEPOINT active_record_1
 => true
> user.name
 => "katie L"
> user.email
 => "me@example.com"
```

```bash
> user2 = User.create(name: "Krista G", email: "another@example.com")
   (0.1ms)  SAVEPOINT active_record_1
  SQL (0.6ms)  INSERT INTO "users" ("created_at", "email", "name", "updated_at") VALUES (?, ?, ?, ?)  [["created_at", Wed, 03 Jul 2013 01:25:08 UTC +00:00], ["email", "another@example.com"], ["name", "Krista G"], ["updated_at", Wed, 03 Jul 2013 01:25:08 UTC +00:00]]
   (0.1ms)  RELEASE SAVEPOINT active_record_1
 => #<User id: 2, name: "Krista G", email: "another@example.com", created_at: "2013-07-03 01:25:08", updated_at: "2013-07-03 01:25:08">
> user2
 => #<User id: 2, name: "Krista G", email: "another@example.com", created_at: "2013-07-03 01:25:08", updated_at: "2013-07-03 01:25:08">
> User.find(1)
  User Load (0.3ms)  SELECT "users".* FROM "users" WHERE "users"."id" = ? LIMIT 1  [["id", 1]]
 => #<User id: 1, name: "katie L", email: "me@example.com", created_at: "2013-07-03 01:22:20", updated_at: "2013-07-03 01:22:20">
```

```bash
> User.find_by(email: "me@example.com")
  User Load (0.3ms)  SELECT "users".* FROM "users" WHERE "users"."email" = 'me@example.com' LIMIT 1
 => #<User id: 1, name: "katie L", email: "me@example.com", created_at: "2013-07-03 01:22:20", updated_at: "2013-07-03 01:22:20"
```


```bash
> User.find(1)
> User.find_by(email: "example")
> User.first
> User.all
> user.update_attributes(name: "Alpa")
> user.errors.full_messages
 => ["Name can't be blank"]
```