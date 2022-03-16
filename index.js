const http = require('http');
var current = new Date();
console.log(current)
    curtime = current.toLocaleDateString();
    curtime += " @ "
    curtime += current.toLocaleTimeString();
    curtime += " "
const hostname = '127.0.0.1';
const port = 8989;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(curtime);
  res.end('');
});
server.listen(port, hostname, () => {
  console.log("Server Running");
});