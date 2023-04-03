const http = require("http");
const app = require("./app/app");

const PORT = process.env.PORT || 9092;

const server = http.createServer(app);

server.listen(PORT, console.log(`Server is listening on ${PORT}`));
