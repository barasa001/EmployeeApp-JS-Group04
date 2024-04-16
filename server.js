// Import required module
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

// Create Express app
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// Define a route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("assets/add_employee", (req, res) => {
  res.render("add_employee");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
