# What is a migration

Migrations alter your database schema in a gradual, consistent way.

Like source code, the structure of a database is evolving as we develop and maintain a database-driven application. For example, during development, we may want to add a new table; or after the application is put into production, we may realize the need of adding an index on a column. It is important to keep track of these structural database changes (called migration) like we do with our source code. If the source code and the database are out of sync, it is very likely the whole system may break.

Migrations are reversible.


