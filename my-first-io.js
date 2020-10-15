const { readFileSync } = require("fs");

const [_, __, file] = process.argv;

console.info(readFileSync(file, "utf8").split("\n").length - 1);
