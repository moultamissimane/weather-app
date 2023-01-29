const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const connectDB = require("./Db");
require("./models/User");
const AuthRoutes = require("./Routes/AuthRoutes");
const requireToken = require("./middlewares/VerifyJwt");

connectDB();

app.use(bodyParser.json());

app.use(AuthRoutes);

app.get("/", requireToken, (req, res) => {
  console.log(req.user);
  res.send("user_id:" + req.user);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT} successfully ✨`);
});
