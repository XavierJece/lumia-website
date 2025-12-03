NVM_DIR := $(HOME)/.nvm

.PHONY: setup-environment
setup-environment: ## Install Node (using NVM) and install PNPM.
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
	@export NVM_DIR="$(NVM_DIR)"; \
	. "$(NVM_DIR)/nvm.sh"; \
	nvm install node; \
	nvm use node; \
	npm install -g pnpm

.PHONY: select-node
.PHONY: select-node
select-node: ## Select Node Version from project.
	@export NVM_DIR="$$HOME/.nvm"; \
	if [ -s "$$NVM_DIR/nvm.sh" ]; then \
		. "$$NVM_DIR/nvm.sh"; \
		if ! nvm use; then \
			nvm install; \
			nvm use; \
		fi \
	else \
		echo "nvm is not installed or the path is incorrect."; \
		exit 1; \
	fi

.PHONY: install-deps
install-deps: select-node ## Install project dependencies using pnpm.
	@pnpm i

.PHONY: start-dev
start-dev: ## Run project in development environment.
	pnpm dev

.PHONY: commit
commit: ## Commit with message rules.
	pnpm cm

.PHONY: cm
cm: ## Commit with message rules.
	pnpm cm

.PHONY: lint
lint: ## Run lint.
	pnpm lint

.PHONY: help
help: ## Display available targets and their descriptions.
	@echo "Usage: make [target]"
	@echo ""
	@echo "Available targets:"
	@awk '/^[a-zA-Z0-9_-]+:.*?## (.+)/ { \
		printf "  %-20s %s\n", $$1, substr($$0, index($$0, $$2)) \
	}' $(MAKEFILE_LIST) | sort

