const {
  promises: { readFile },
} = require("fs");

const [_, __, file] = process.argv;

(async () => {
  console.info((await readFile(file, "utf8")).split("\n").length - 1);
})();
