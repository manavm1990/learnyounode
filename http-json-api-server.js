const { createServer } = require("http");
const { parse } = require("url");

const [_, __, port] = process.argv;

const server = createServer(({ url }, res) => {
  const {
    query: { iso },
    pathname,
  } = parse(
    /**
     * ...the second parameter is a boolean
     *  stating whether the method should parse the query string,
     * so we set it to true
     * (https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/)
     */
    url,
    true
  );

  const date = new Date(iso);

  switch (pathname) {
    case "/api/parsetime":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds(),
        })
      );
      break;
    case "/api/unixtime":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          unixtime:
            /**
             * This is more accurate than Date.parse()!
             * https://www.sololearn.com/Discuss/1878951/what-is-the-difference-between-the-parse-methods-and-gettime-in-javascript
             */
            date.getTime(),
        })
      );
      break;
    default:
      res.statusCode = 404;
      res.end("🙅🏽‍♂️");
  }
});

server.listen(port, () => {
  console.info("Server 🏃🏽‍♂️", port);
});
