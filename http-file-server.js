const http = require("http");
const { createReadStream } = require("fs");

const [_, __, port, fileName] = process.argv;

const server = http.createServer((___, res) => {
  createReadStream(fileName).pipe(res);
});

server.listen(port, () => {
  console.info("Server 🏃🏽‍♂️");
});
