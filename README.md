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

Setup this repo locally: `https://github.com/tomdonohoe-fin/docker`. Follow Readme instructions. Emoji-Sender-Api depends on it's DB network.

```bash
# install dependencies locally.
$ yarn install

# build containers
$ make docker-build

# create the database
$ make create-database

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
$ make migrate-revert

# Creates a brand new database in the running docker postgres.
$ make create-database

# Drops the database in the running docker postgres database
$ make drop-database

# Drops and recreates the database in the running docker postgres database
$ make recreate-database
```

We use a `pgadmin` image to enable you to view database in a UI.

To use go to localhost:8080, login with:
- (u) `docker@gmail.com`
- (p) `secret`
