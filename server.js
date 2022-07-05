const http = require("http");
const stats = require("./index.js");

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/stats") {
    res.end(JSON.stringify(stats, null, 2));
  } else {
    res.end("<h1>Seja bem-vindo!</h1>");
  }
});

server.listen(port, () => console.log("Server is running"));
