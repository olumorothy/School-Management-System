const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 9092;

app.use(morgan("dev"));

app.listen(PORT, console.log(`Server is listening on ${PORT}`));
