const watcher = require("chokidar");
const childProcess = require("child_process");

childProcess.spawn("node", [
  "./node_modules/.bin/http-server",
  "./build",
  "-c-1",
  "-o"
]);

const observer = watcher.watch("./source", {
  ignored: "./source/**/*.t.js",
  usePolling: true,
  interval: 5000
});

observer.on("change", (path, event) => {
  console.log(path);
  childProcess.spawn("npm", ["run", "build-dev"]);
});
