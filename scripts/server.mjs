
import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 8080;
const publicDir = path.join(process.cwd(), 'public');

const server = http.createServer((req, res) => {
  const filePath = path.join(publicDir, req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
