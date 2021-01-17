const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
	const filePath = path.join(__dirname, "index.html");
	var stat = fs.statSync(filePath);

	res.writeHead(200, {
		"Content-Type": "text/html", //"Content-Type": "text/css"
		"Content-Length": stat.size,
  });


	const readStream = fs.createReadStream(filePath);
	readStream.pipe(res);
});

server.listen(5001);

console.log("Node.js web server at port 5001 is running..");