#pull official base image
FROM node:18.0.0-alpine as build

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
#RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install
RUN npm run build

#FROM nginx:alpine
FROM nginx:1.15

#COPY --from=builder /app/dist/hn-app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]