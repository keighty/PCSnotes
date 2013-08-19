# Django and heroku

deploying django on heroku requires
* heroku toolbelt
* python
* virtualenv (like bundler)
* postgres
* heroku user account

##Virtualenv
It creates an environment that has its own installation directories, that doesn't share libraries with other virtualenv environments (and optionally doesn't access the globally installed libraries either).

```bash
$ mkdir hellodjango && cd hellodjango
$ virtualenv venv --distribute
$ source venv/bin/activate
$ pip install django-toolbelt
$ django-admin.py startproject hellopartner .
$ touch Procfile
```
##Procfile:
`web: gunicorn hellopartner.wsgi` - allows you to use foreman to start the app

##Settings.py
add the following to the end of settings.py
```python
# Parse database configuration from $DATABASE_URL
import dj_database_url
DATABASES['default'] =  dj_database_url.config()

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Static asset configuration
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = 'staticfiles'
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
```
```bash
$ foreman start
$ pip freeze > requirements.txt
```
##pip freeze
creates a requirements file from our current setup

##wsgi.py
add the following to the end of the wsgi.py file
```python
from django.core.wsgi import get_wsgi_application
from dj_static import Cling

application = Cling(get_wsgi_application())
```

##deploy on heroku
```bash
$ touch .gitignore
$ git init
$ git add .
$ gc "initial commit"
$ heroku create
$ git push heroku master
$ heroku open
```