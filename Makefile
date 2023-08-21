.PHONY: build run

NAME = fintech-devcon-demo-react-vite

build:
	docker build \
		--build-arg REACT_APP_VERSION=`npm run version --silent` \
		--build-arg REACT_APP_COMMIT=`git rev-parse HEAD` -t $(NAME) \
		--build-arg GITHUB_PACKAGES_TOKEN=${GITHUB_PACKAGES_TOKEN} \
		-f Dockerfile .

	docker image prune --filter label=fintech-devcon-demo-react-vite-builder -f

run:
	docker run --rm -p 80:80 --name $(NAME) $(NAME)