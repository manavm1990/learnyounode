const { createServer } = require("http");

const [_, __, port] = process.argv;

const server = createServer((req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 200;
    res.end("Post requests only!");
  }
  const data = [];
  req.on("data", (chunk) => {
    data.push(chunk);
  });

  req.on("end", () => {
    res.statusCode = 400;
    res.end(data.join("").toUpperCase());
  });
});

server.listen(port, () => {
  console.info("Server 🏃🏽‍♂️", port);
});
