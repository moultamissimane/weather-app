const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const connectDB = require("./Db");
require("./models/User");
const AuthRoutes = require("./Routes/AuthRoutes");

connectDB();

app.use(bodyParser.json());

app.use(AuthRoutes);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT} successfully ✨`);
});
