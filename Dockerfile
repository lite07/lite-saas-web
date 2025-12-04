# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies for better compatibility
RUN apk add --no-cache git

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the default Vite dev server port
EXPOSE 5173

# Run the development server
# Using --host to make it accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
