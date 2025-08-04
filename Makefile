# Docker
.PHONY: start
start:
	@echo "🚀 Starting API and Frontend with Docker Compose..."
	docker-compose up

.PHONY: start-detached
start-detached:
	@echo "🚀 Starting in detached mode..."
	docker-compose up -d

.PHONY: stop
stop:
	@echo "🛑 Stopping all services..."
	docker-compose down

.PHONY: build
build:
	@echo "🔨 Building Docker images..."
	docker-compose build

.PHONY: logs
logs:
	@echo "📜 Showing logs..."
	docker-compose logs -f

.PHONY: restart
restart: stop build start


.PHONY: start-local-api
start-local-api:
	@cd backend/core && poetry run uvicorn main:app --reload

.PHONY: start-local-frontend
start-local-frontend:
	@cd visualizer_fe && npm run dev
