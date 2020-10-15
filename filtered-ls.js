const { extname } = require("path");
const {
  promises: { readdir },
} = require("fs");

console.log(readdir, extname);
