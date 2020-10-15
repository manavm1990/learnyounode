const { get } = require("http");

const { BufferListStream } = require("bl");

const [_, __, resource] = process.argv;

get(resource, (res) => {
  res.setEncoding("utf8");
  res.pipe(
    BufferListStream((err, data) => {
      if (err) {
        console.error(err);
      } else {
        const d = data.toString();
        console.info(d.length);
        console.info(d);
      }
    })
  );
});
