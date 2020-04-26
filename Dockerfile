# FROM node:13.3.0 AS compile-image

# RUN npm install

# WORKDIR /opt/ng
# COPY  package.json package-lock.json ./

# ENV PATH="./node_modules/.bin:$PATH"

# COPY . ./
# CMD  npm run aot

# FROM nginx
# #COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=compile-image /opt/ng/dist/dheerendra /usr/share/nginx/html


### STAGE 1: Build ###
FROM node:13.3.0 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run aot
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/dheerendra /usr/share/nginx/html
