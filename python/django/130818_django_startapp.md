# Django startapp

`python manage.py shell` - IRB for python

`django-admin.py startproject mysite` begins a project

`python manage.py runserver` starts the server

`python manage.py startapp polls` begins an app. A project can have many apps, and apps can be shared between projects.

Tell your project that you have a new app installed
```
INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Uncomment the next line to enable the admin:
    # 'django.contrib.admin',
    # Uncomment the next line to enable admin documentation:
    # 'django.contrib.admindocs',
    'polls',
)
```

* `python manage.py sql polls` – shows the sql statement that is going to be executed from the models defined in the polls.py files
* `python manage.py validate` – Checks for any errors in the construction of your models.
* `python manage.py sqlcustom polls` – Outputs any custom SQL statements (such as table modifications or constraints) that are defined for the application.
* `python manage.py sqlclear polls` – Outputs the necessary DROP TABLE statements for this app, according to which tables already exist in your database (if any).
* `python manage.py sqlindexes polls` – Outputs the CREATE INDEX statements for this app.
* `python manage.py sqlall polls` – A combination of all the SQL from the sql, sqlcustom, and sqlindexes commands.
* `python manage.py syncdb` - creates the models
