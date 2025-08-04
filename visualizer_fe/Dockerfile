FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json ./

# Elimina prima eventuali vecchie dipendenze e lockfile (pulizia)
RUN rm -rf node_modules package-lock.json || true

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
