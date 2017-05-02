# Travel-Far
Simple web application



# Deploy

1. `./private/docker/deploy.sh`
2. Run the deploy command:
```
now \
  -e MONGO_URL="$(node -p 'settings=require("./private/docker/settings-staging.json");settings.MONGO_URL.MONGOLAB')" \
  -e METEOR_SETTINGS="$(node -p 'settings=require("./private/docker/settings-staging.json");JSON.stringify(settings)')" \
  -e SERVER_BASE=/usr/src/app/bundle/programs/server \
  -e ROOT_URL=http://127.0.0.0:3000 \
  -e NODE_ENV=staging \
  -e PORT=3000 \
  -p 3000:3000 \
  deploy .demeteorized
```
