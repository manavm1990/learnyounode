const {
  promises: { readdir },
} = require("fs");
const { extname } = require("path");

const [_, __, dir, ext] = process.argv;

(async () => {
  const files = await readdir(dir);

  files.forEach((file) => {
    if (extname(file) === `.${ext}`) {
      console.log(file);
    }
  });
})();
