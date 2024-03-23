// let mydata = require("./index");
// const os = require("os");
// console.log(data, os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());

const fs = require("fs");
fs.readFile("myfile.html", "utf8", (err, data) => {
  console.log(err, data);
});
console.log("hii");
