# Postgres hell...o

# install postgresql via homebrew
`brew install postgresql`

# initialize the database
`initdb /usr/local/var/postgres -E utf8`

# install lunchy for managing postgres
`brew install lunchy`

# install a launch agent
`cp /usr/local/Cellar/postgresql/9.2.4/homebrew.mxcl.postgresql.plist  ~/Library/LaunchAgents/`

# start postgresql
`lunchy start postgres`

# check path to postgres
`which pg_ctl`

# compare that with your $PATH
```bash
$ which pg_ctl
/usr/local/bin/pg_ctl

$ cat ~/.bashrc | grep PATH
PATH=/usr/bin:/usr/local/bin:$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
```

Make sure that your /usr/local/bin comes BEFORE your /usr/bin to ensure you are calling the right path for postgres. You can do this by changing

```
PATH=/usr/bin:/usr/local/bin:$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
```
to
```
PATH=/usr/local/bin:/usr/bin:$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
```

# create a database
`$ createdb db/testdb

# view your databases
`$ psql -l`

# drop a database
`dropdb db/testdb

```bash
$ psql --help
psql is the PostgreSQL interactive terminal.

Usage:
  psql [OPTION]... [DBNAME [USERNAME]]

General options:
  -c, --command=COMMAND    run only single command (SQL or internal) and exit
  -d, --dbname=DBNAME      database name to connect to (default: "katie")
  -f, --file=FILENAME      execute commands from file, then exit
  -l, --list               list available databases, then exit
  -v, --set=, --variable=NAME=VALUE
                           set psql variable NAME to VALUE
  -V, --version            output version information, then exit
  -X, --no-psqlrc          do not read startup file (~/.psqlrc)
  -1 ("one"), --single-transaction
                           execute command file as a single transaction
  -?, --help               show this help, then exit

Input and output options:
  -a, --echo-all           echo all input from script
  -e, --echo-queries       echo commands sent to server
  -E, --echo-hidden        display queries that internal commands generate
  -L, --log-file=FILENAME  send session log to file
  -n, --no-readline        disable enhanced command line editing (readline)
  -o, --output=FILENAME    send query results to file (or |pipe)
  -q, --quiet              run quietly (no messages, only query output)
  -s, --single-step        single-step mode (confirm each query)
  -S, --single-line        single-line mode (end of line terminates SQL command)

Output format options:
  -A, --no-align           unaligned table output mode
  -F, --field-separator=STRING
                           set field separator (default: "|")
  -H, --html               HTML table output mode
  -P, --pset=VAR[=ARG]     set printing option VAR to ARG (see \pset command)
  -R, --record-separator=STRING
                           set record separator (default: newline)
  -t, --tuples-only        print rows only
  -T, --table-attr=TEXT    set HTML table tag attributes (e.g., width, border)
  -x, --expanded           turn on expanded table output
  -z, --field-separator-zero
                           set field separator to zero byte
  -0, --record-separator-zero
                           set record separator to zero byte

Connection options:
  -h, --host=HOSTNAME      database server host or socket directory (default: "local socket")
  -p, --port=PORT          database server port (default: "5432")
  -U, --username=USERNAME  database user name (default: "katie")
  -w, --no-password        never prompt for password
  -W, --password           force password prompt (should happen automatically)

For more information, type "\?" (for internal commands) or "\help" (for SQL
commands) from within psql, or consult the psql section in the PostgreSQL
documentation.
```

# command line tools
```
$ psql -l
                                List of databases
     Name     | Owner | Encoding |   Collate   |    Ctype    | Access privileges
--------------+-------+----------+-------------+-------------+-------------------
 db/topscores | katie | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 postgres     | katie | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0    | katie | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/katie         +
              |       |          |             |             | katie=CTc/katie
 template1    | katie | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/katie         +
              |       |          |             |             | katie=CTc/katie
(4 rows)

$ psql db/topscores
psql (9.2.4)
db/topscores=# CREATE USER user WITH PASSWORD 'blank'
db/topscores-# \du
                             List of roles
 Role name |                   Attributes                   | Member of
-----------+------------------------------------------------+-----------
 katie     | Superuser, Create role, Create DB, Replication | {}

db/topscores-#