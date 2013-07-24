# Postgres

## initialize postgres

```bash
$ initdb /usr/local/var/postgres -E utf8
```

## what is going on?
```bash
$ brew info postgres
```

## is pg running?
```bash
$ ps aux | grep postgres | grep -v grep
```

or

```bash
$ ps auxwww | grep postgres
```

## how was it installed?
```bash
$ brew list
apple-gcc42 automake  libgpg-error  libxml2   mongodb   openssl   postgresql
aspell    git   libksba   libxslt   mysql   ossp-uuid readline
autoconf  icu4c   libtool   libyaml   node    pkg-config  tree
```

## how to get started?
Must initialize a database similar to how you initialize git:
`$ initdb <path/to/location>`

The first time I ran the command, I got a fatal error:

```bash
...
FATAL:  could not create shared memory segment: Cannot allocate memory
```

Thanks to the google, I found this [blog post](http://willbryant.net/software/mac_os_x/postgres_initdb_fatal_shared_memory_error_on_leopard)

and initialized my database this way

```bash
$ sudo sysctl -w kern.sysv.shmall=65536
Password:
kern.sysv.shmall: 1024 -> 65536
$ sudo sysctl -w kern.sysv.shmmax=16777216
kern.sysv.shmmax: 4194304 -> 16777216
$ initdb db/
The files belonging to this database system will be owned by user "katie".
This user must also own the server process.
...
The database cluster will be initialized with locale "en_US.UTF-8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".
...
fixing permissions on existing directory db ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 8000kB
creating configuration files ... ok
creating template1 database in db/base/1 ... ok
initializing pg_authid ... ok
initializing dependencies ... ok
creating system views ... ok
loading system objects' descriptions ... ok
creating collations ... ok
creating conversions ... ok
creating dictionaries ... ok
setting privileges on built-in objects ... ok
creating information schema ... ok
loading PL/pgSQL server-side language ... ok
vacuuming database template1 ... ok
copying template1 to template0 ... ok
copying template1 to postgres ... ok
...
WARNING: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.
...
Success. You can now start the database server using:
...
    postgres -D db
or
    pg_ctl -D db -l logfile start
...
$
```

##installation notes
$ brew doctor
Your system is ready to brew.
$ brew install postgresql
==> Downloading http://ftp.postgresql.org/pub/source/v9.2.4/postgresql-9.2.4.tar.bz2
Already downloaded: /Library/Caches/Homebrew/postgresql-9.2.4.tar.bz2
==> Patching
patching file src/pl/plpython/Makefile
patching file contrib/uuid-ossp/uuid-ossp.c
==> ./configure --prefix=/usr/local/Cellar/postgresql/9.2.4 --datadir=/usr/local/Cellar/postgresql/9.2.4/share/postgresql --docdi
==> make install-world
==> Caveats
If builds of PostgreSQL 9 are failing and you have version 8.x installed,
you may need to remove the previous version first. See:
  https://github.com/mxcl/homebrew/issues/issue/2510


If this is your first install, create a database with:
  initdb /usr/local/var/postgres -E utf8


To migrate existing data from a previous major version (pre-9.2) of PostgreSQL, see:
  http://www.postgresql.org/docs/9.2/static/upgrading.html


Some machines may require provisioning of shared memory:
  http://www.postgresql.org/docs/9.2/static/kernel-resources.html#SYSVIPC
When installing the postgres gem, including ARCHFLAGS is recommended:
  ARCHFLAGS="-arch x86_64" gem install pg

To install gems without sudo, see the Homebrew wiki.

To reload postgresql after an upgrade:
    launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
==> Summary
🍺  /usr/local/Cellar/postgresql/9.2.4: 2842 files, 39M, built in 2.2 minutes
$

## check status
$ pg_ctl status -D /usr/local/var/postgres
pg_ctl: server is running (PID: 84789)
/usr/local/Cellar/postgresql/9.2.4/bin/postgres "-D" "/usr/local/var/postgres" "-r" "/usr/local/var/postgres/server.log"