FROM node:20

WORKDIR /server

COPY package* .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
