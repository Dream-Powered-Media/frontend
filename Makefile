docker-build:
	docker build .

mark-runnable:
	chmod +x src/scripts/create-service.sh
	chmod +x src/scripts/delete-service.sh

create-service:
	echo "todo"

delete-service:
	echo "todo"

run:
	npm start
