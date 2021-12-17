help:
	@echo "init  => Up container."
	@echo "start => Start container."
	@echo "exec  => Execute to container."

init:
	@docker-compose up -d --build

start:
	@docker-compose start

exec:
	@docker exec -it broadcast-derby bash
