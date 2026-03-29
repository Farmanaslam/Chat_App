# Use node 20 for latest packages
FROM node:20

# Set working directory
WORKDIR /app

# Copy root package.json and package-lock.json
COPY package*.json ./

# Install dependencies (nodemon, express, etc.)
RUN npm install

# Copy backend code
COPY backend ./backend

# Copy .env
COPY .env ./

WORKDIR /app/backend

# Expose backend port
EXPOSE 3000

CMD ["npm", "run", "dev"]