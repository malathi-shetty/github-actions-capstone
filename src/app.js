'use strict';

const express = require('express');
const app = express();

app.use(express.json());

const tasks = [
  { id: 1, title: 'Learn GitHub Actions', done: false },
  { id: 2, title: 'Build CI/CD Pipeline', done: false }
];

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Day 48 – GitHub Actions Capstone',
    env: process.env.NODE_ENV || 'development'
  });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Service is healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  });
});

// Tasks endpoint
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: 'Internal Server Error'
  });
});

module.exports = app;
