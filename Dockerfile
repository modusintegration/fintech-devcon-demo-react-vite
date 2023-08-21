# stage1 - build react app first
FROM node:16.17-alpine as fintech-devcon-demo-react-vite-builder
LABEL stage=fintech-devcon-demo-react-vite-builder

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

COPY . ./
# Install dependencies (yarn install --frozen-lockfile makes sure the exact versions in the lockfile gets installed)
RUN yarn install --frozen-lockfile

# Adds the package version and commit hash
ARG REACT_APP_VERSION
ENV REACT_APP_VERSION=$REACT_APP_VERSION

ARG REACT_APP_COMMIT
ENV REACT_APP_COMMIT=$REACT_APP_COMMIT

# Build the app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.23.1-alpine
# Copy built assets from `builder` image
COPY --from=fintech-devcon-demo-react-vite-builder /usr/src/app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
