# Step 1: Use a Node.js base image
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the server code
COPY . ./

# Install nodemon as a dev dependency
RUN npm install --save-dev nodemon

# Expose port 3000
EXPOSE 3000

# Run the server with nodemon
CMD ["npx", "nodemon", "server.js"]
