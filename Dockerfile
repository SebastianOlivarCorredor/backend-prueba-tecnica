FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x index.js

EXPOSE 3001 

CMD ["npm", "start"] 