FROM node:18-slim

WORKDIR /app

# Copia i file di dipendenze
COPY package.json package-lock.json ./

# Pulizia della cache di moduli vecchi, ma lascia il lock file!
RUN rm -rf node_modules && npm install

# Copia il resto del codice
COPY . .

# Comando per avviare React (Vite)
CMD ["npm", "run", "dev"]
