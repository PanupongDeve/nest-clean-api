echo "##################### Heroku clear fix ######################"
git remote rm heroku
echo "##################### Heroku login ######################"
heroku login

echo "##################### Heroku Create Repo ################"

read -p 'create app heroku app name: ' myapp 
heroku apps:create $myapp


echo "##################### Heroku Push Repo ################"
git add .
git commit -m "update heroku"
git push origin master
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku master

./bash/heroku/logs-server.sh