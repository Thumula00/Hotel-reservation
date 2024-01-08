version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    environment:
      - mongodb+srv://dv:jt8GbZneQMqsscv8@cluster0.xjkqkk3.mongodb.net/hotel?retryWrites=true&w=majority

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
    driver: local
