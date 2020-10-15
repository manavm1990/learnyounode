const net = require("net");

const { format } = require("date-fns");

const [_, __, port] = process.argv;

const server = net.createServer(
  // 'socket' will write and close
  (socket) => {
    console.info("client connected!");

    socket.on("end", () => {
      console.info("client disconnected");
    });

    socket.end(`${format(new Date(), "yyyy-M-d HH:mm")}\n`);
  }
);

server.listen(port, () => {
  console.info("TCP server 🏃🏽‍♂️");
});
