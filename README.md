## Emoji Sender
This is a small app for fun to learn to docker.

## Setup

Get your api key from https://m3o.com/emoji

Be sure to create `app.env` and set the required env vars:

```
M3O_API_URL=https://api.m3o.com/v1/emoji/Send
M3O_API_TOKEN={YOUR_KEY}
MOBILE_NUMBER={NUMBER_TO_SEND_TO}
```

## Usage

```
npm install
```

Commands:

`make build` to build docker.

`make start` to run docker.
