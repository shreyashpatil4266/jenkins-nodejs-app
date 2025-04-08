const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.end(' Hello from Jenkins CI/CD app!');
});

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

