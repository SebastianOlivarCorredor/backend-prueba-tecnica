FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chmod +x index.js

COPY . .

EXPOSE 3001 

CMD ["npm", "start"] 