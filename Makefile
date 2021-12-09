APP_NAME=emoji-sender-api
COMPOSE=docker-compose -p emoji-sender

###################################
# Docker
###################################

docker-build:
	$(COMPOSE) build
.PHONY: docker-build

docker-up:
	docker-compose up -d
.PHONY: docker-down

docker-down:
	docker-compose down
.PHONY: docker-down

###################################
# Database
###################################

migrate-generate:
	@if [[ -z "$(name)" ]]; then \
		printf "\nError: Must include \'name\': ie;\n  $$ make migrate-generate name=migration-name\n\n"; \
		exit 1; \
	fi
	$(COMPOSE) run --rm --entrypoint=sh $(APP_NAME) -c 'yarn run migration:generate -n $(name)'
.PHONY: migrate-generate

migrate:
	$(COMPOSE) run --rm --entrypoint=sh $(APP_NAME) -c 'yarn run migration:run'
.PHONY: migrate-generate

migrate-revert:
	$(COMPOSE) run --rm --entrypoint=sh $(APP_NAME) -c 'yarn run migration:revert'
.PHONY: migrate-generate