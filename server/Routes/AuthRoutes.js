const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

router.post("/signup", async (req, res) => {
  //   res.send("You made a post request");
  console.log(req.body);
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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  }
  const savedUser = await User.findOne({ email: email });
  if (!savedUser) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
  try {
    bcrypt.compare(password, savedUser.password, (err, result) => {
      if (result) {
        console.log("password matched 😊");
        const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET);
        res.send({ token });
      } else {
        return res.status(422).json({ error: "Invalid email or password" });
      }
    });
  } catch (err) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
});

module.exports = router;
