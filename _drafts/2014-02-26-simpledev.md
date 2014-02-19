---
author: elliott
layout: post
---

Getting a local dev environment running.
http://www.beatofthegeek.com/2013/04/how-to-setup-postgresql-python-flask.html


heroku addons:add heroku-postgresql:dev
# Note the COLOR

# Fill in your color here:
heroku pg:promote HEROKU_POSTGRESQL_COLOR

# Find DB location:
heroku pg:credentials DATABASE
# Note the Connection URL at the bottom

SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI","[Connection URL goes here]")

# add environment variable
echo 'export DATABASE_URI="[Connection URL goes here]"' > ~/.bash_profile
