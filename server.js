const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const connectDB = require("./server/database/connection");

const app = express();
dotenv.config({ path: "config.env" });

let PORT = process.env.PORT || 8080;

//connect to DB
connectDB();

// parse request to the body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "asset/css")));
app.use("/img", express.static(path.resolve(__dirname, "asset/img")));
app.use("/js", express.static(path.resolve(__dirname, "asset/js")));

app.use(express.static("views"));

// load routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});
