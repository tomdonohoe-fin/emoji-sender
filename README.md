## Emoji Sender
This is a small app for fun to learn to docker.

## Setup

Get your api key from https://m3o.com/emoji

Be sure to create `app.env` and set the required env vars:

```
M3O_API_URL=https://api.m3o.com/v1/emoji/Send
M3O_API_TOKEN={YOUR_KEY}
DB_HOST=emoji-sender-db
DB_USER=emoji
DB_PASS=emoji
DB_NAME=emoji
```

## Get Started

```bash
# install dependencies locally.
$ yarn install

# build containers
$ make docker-build

# start the application
$ make docker-up

# stop the application
$ make docker-down
```

## Database

```bash
# build a migration script
$ make migrate-generate name=SomeMigrationName

# run the migration
$ make migrate

# revert previous migration
$ make migrate
```

We use a `pgadmin` image to enable you to view database in a UI.

To use go to localhost:8080, login with:
- (u) `admin@gmail.com`
- (p) `secret`

When connecting a DB server, this command can be helpful to find DB IP address:

```bash
$ docker inspect emoji-sender-db | grep IPAddress
```
