# Build stage
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy album folder for images
COPY --from=build /app/album /usr/share/nginx/html/album

# Fix permissions for album files
RUN chmod -R 644 /usr/share/nginx/html/album/*
RUN find /usr/share/nginx/html/album -type d -exec chmod 755 {} \;

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]