const request = require("supertest");
const app = require("../app");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("Login Route", () => {
  it("Should log in a user", async () => {
    const user = new User({
      email: "test@example.com",
      password: bcrypt.hashSync("password", 10),
    });
    await user.save();

    const response = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "password" });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it("Should return error if email or password is missing", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "test@example.com" });

    expect(response.status).toBe(422);
    expect(response.body.error).toBe("Please add email or password");
  });

  it("Should return error if email is invalid", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "invalid@example.com", password: "password" });

    expect(response.status).toBe(422);
    expect(response.body.error).toBe("Invalid email or password");
  });

  it("Should return error if password is invalid", async () => {
    const user = new User({
      email: "test@example.com",
      password: bcrypt.hashSync("password", 10),
    });
    await user.save();

    const response = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "invalidpassword" });

    expect(response.status).toBe(422);
    expect(response.body.error).toBe("Invalid email or password");
  });
});
