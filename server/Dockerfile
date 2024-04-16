# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./
COPY . /usr/src/app

# Install Python and necessary build tools
RUN apk add --no-cache python3 make g++
# Install dependencies
RUN npm install


# Bundle app source
# COPY . .
ENV SERVER_PORT=8001
ENV DB_NAME="Controller2"
# Expose the port your app runs on
EXPOSE 8001

CMD node server.js
# Define environment variables
#ENV NODE_ENV=production
#ENV PORT=3000

# Run the application
#CMD ["npm", "start"]