FROM node:10.22-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["sh", "-c", "node server.js"]
EXPOSE 3000
