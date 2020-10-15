const { get } = require("http");

const [_, __, resource] = process.argv;

get(resource, (res) => {
  res.setEncoding("utf8");
  res.on("data", (data) => {
    console.info(data);
  });
});
