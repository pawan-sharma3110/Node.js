const http = require("http");
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end("<h1>Hello World</h1>");
});

server.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
