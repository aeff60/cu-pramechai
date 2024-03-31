# Use an official Node.js image as the base 
FROM node:21-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of your application code 
COPY . .

# Build your React application
RUN npm run build

# Stage for production
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port Nginx listens on
EXPOSE 80 

# The default Nginx command to start the server
CMD ["nginx", "-g", "daemon off;"] 