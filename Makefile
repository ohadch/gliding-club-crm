NAMESPACE=gliding-club-crm

install-dev:
	# Install client
	cd client && yarn install

	# Install server
	cd server && yarn install

up:
	docker-compose up -d

down:
	docker-compose down

local-registry-up:
	docker-compose -f docker-compose-registry.yml up -d

local-registry-down:
	docker-compose -f docker-compose-registry.yml down

up-k8s:
	# Update helm dependencies
	@echo "Updating helm dependencies"
	helm dependency update helm/gliding-club-crm

	# Install the chart
	@echo "Installing the chart"
	helm upgrade --install \
		gliding-club-crm \
		helm/gliding-club-crm \
		--create-namespace \
		-n $(NAMESPACE)

down-k8s:
	helm uninstall gliding-club-crm -n $(NAMESPACE)