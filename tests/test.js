'use strict';

const http = require('http');
const app = require('../src/app');

const server = http.createServer(app);

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) {
    console.log(`✅ ${label}`);
    passed++;
  } else {
    console.log(`❌ ${label}`);
    failed++;
  }
}

function request(port, path) {
  return new Promise((resolve, reject) => {

    http.get(`http://localhost:${port}${path}`, (res) => {

      let body = '';

      res.on('data', chunk => body += chunk);

      res.on('end', () => {

        try {
          resolve({
            status: res.statusCode,
            body: JSON.parse(body)
          });
        } catch {
          resolve({
            status: res.statusCode,
            body
          });
        }
      });

    }).on('error', reject);
  });
}

server.listen(0, async () => {

  const PORT = server.address().port;

  console.log(`\nRunning tests on port ${PORT}\n`);

  try {

    const health = await request(PORT, '/health');

    assert(health.status === 200, 'GET /health returns 200');

    assert(
      health.body.status === 'ok',
      'health.status equals ok'
    );

    const root = await request(PORT, '/');

    assert(root.status === 200, 'GET / returns 200');

    const tasks = await request(PORT, '/tasks');

    assert(tasks.status === 200, 'GET /tasks returns 200');

    assert(Array.isArray(tasks.body), '/tasks returns array');

    const missing = await request(PORT, '/missing');

    assert(missing.status === 404, 'Unknown route returns 404');

    console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);

    server.close();

    process.exit(failed > 0 ? 1 : 0);

  } catch (err) {

    console.error(err);

    server.close();

    process.exit(1);
  }
});
