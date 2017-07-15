const loaders = require("./loaders");
const path = require("path");
const fs = require("fs");

console.log("\n\n\n", __dirname, "\n\n\n");
console.log(path.resolve(__dirname, "./../source"));
console.log(path.resolve(__dirname, "TEST"));
module.exports = {
  context: path.resolve(__dirname, "../source"),

  entry: "./index.js",

  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "../build/js")
  },

  module: {
    loaders: [loaders.style, loaders.babel]
  },

  resolve: {
    modules: [path.resolve(__dirname, "../node_modules")],

    alias: {
      "@comps": path.resolve(__dirname, "../source/comps"),
      "@styles": path.resolve(__dirname, "../source/styles")
    }
  }
};
