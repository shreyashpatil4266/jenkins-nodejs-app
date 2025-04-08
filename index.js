const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  console.log("✨ App has started with latest changes!");
  res.end('✅ CI/CD update: clean rebuild');
});

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
