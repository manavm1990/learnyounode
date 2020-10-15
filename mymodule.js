const {
  promises: { readdir },
} = require("fs");
const { extname } = require("path");

module.exports =
  /**
   * 1. Asynchronously read all files in the given dir
   * 2. Filter out those files that don't match the desired extension
   */
  async (dir, ext) =>
    (await readdir(dir)).filter((f) => extname(f) === `.${ext}`);
