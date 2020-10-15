const { get } = require("http");

const { BufferListStream } = require("bl");

const [_, __, ...urls] = process.argv;

const getData = (resource) =>
  new Promise((resolve, reject) => {
    get(resource, (res) => {
      res.setEncoding("utf8");

      res.pipe(
        BufferListStream((err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.toString());
        })
      );
    });
  });

Promise.all(urls.map((url) => getData(url))).then((data) =>
  data.forEach((d) => {
    console.info(d);
  })
);
