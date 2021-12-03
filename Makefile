build:
	docker build -t emoji-sender .
.PHONY: build

start:
	docker run --rm -it --env-file app.env emoji-sender
.PHONY: start

shell:
	docker run --rm -it emoji-sender bash
.PHONY: shell