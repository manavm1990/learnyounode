const filterFiles = require("./mymodule");

const [_, __, dir, ext] = process.argv;

(async () => {
  console.info((await filterFiles(dir, ext)).join("\n"));
})();
