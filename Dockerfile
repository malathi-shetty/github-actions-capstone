# Temporary vulnerable image for Trivy testing
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy application source
COPY --chown=node:node . .

# Use non-root user
USER node

# Expose app port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
