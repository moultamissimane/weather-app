const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/signup", async (req, res) => {
  res.send("You made a post request");
  const { name, email, password, address } = req.body;
  try {
    const user = new User({ name, email, password, address });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }

  User.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "User already exists with that email" });
    }
    const user = new User({
      name,
      email,
      password,
      address,
    });

    user
      .save()
      .then((user) => {
        res.json({ message: "saved successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
