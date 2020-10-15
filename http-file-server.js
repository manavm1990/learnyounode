const { createServer } = require("http");
const { createReadStream } = require("fs");

const [_, __, port, fileName] = process.argv;

const server = createServer((___, res) => {
  createReadStream(fileName).pipe(res);
});

server.listen(port, () => {
  console.info("Server 🏃🏽‍♂️");
});
