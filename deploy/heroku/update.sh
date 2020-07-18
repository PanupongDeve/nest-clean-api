heroku config:set NPM_CONFIG_PRODUCTION=false
echo "##################### Heroku Push Repo ################"
git add .
git commit -m "update heroku"
git push origin master
echo "##################### Heroku login ######################"
heroku login
git push heroku master

./bash/heroku/logs-server.sh