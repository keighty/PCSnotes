# Python and heroku

Make a directory with three files:
##app.py
```python
import os
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello from Python!"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
```

##requirements.txt
`Flask==0.7.2`

##Procfile
`web: python app.py`


##Commit to Git and push to heroku
```bash
$ git init
$ git add .
$ git commit -m "init"
$ heroku create
$ git push heroku master
...
$ heroku open
```