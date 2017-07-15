const path = require("path");
const fs = require("fs");

module.exports = {
  test: /\.jsx?$/,
  include: path.resolve(__dirname, "./../../source"),
  use: [
    {
      loader: "babel-loader",
      options: JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "./../.babelrc"), "utf8")
      )
    }
  ]
};
