const request = require("supertest");
const app = require("../index");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "mocked-token"),
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn((_, __, cb) => cb(null, true)),
}));

describe("/login", () => {
  const User = {
    findOne: jest.fn(() =>
      Promise.resolve({
        email: "test@test.com",
        password:
          "$2b$10$/kG0m.I1HWJmKcgQMq.bYOt.zKj1/PytjzZ3V7OuHcFxk7cLf0yXK",
      })
    ),
    _id: "123",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 if email is not present in request", async () => {
    const app = express();
    app.use(express.json());
    app.use("/", router);

    const response = await request(app)
      .post("/login")
      .send({ password: "password" });
    expect(response.statusCode).toBe(422);
    expect(response.body).toEqual({ error: "Please add email or password" });
  });

  it("should return 400 if password is not present in request", async () => {
    const app = express();
    app.use(express.json());
    app.use("/", router);

    const response = await request(app)
      .post("/login")
      .send({ email: "test@test.com" });
    expect(response.statusCode).toBe(422);
    expect(response.body).toEqual({ error: "Please add email or password" });
  });

  it("should return 422 if user is not found", async () => {
    const app = express();
    app.use(express.json());
    app.use("/", router);

    User.findOne.mockImplementationOnce(() => Promise.resolve(null));

    const response = await request(app)
      .post("/login")
      .send({ email: "test@test.com", password: "password" });
    expect(response.statusCode).toBe(422);
    expect(response.body).toEqual({ error: "Invalid email or password" });
  });

  it("should return 200 and token if email and password are correct", async () => {
    const app = express();
    app.use(express.json());
    app.use("/", router);

    const response = await request(app)
      .post("/login")
      .send({ email: "test@test.com", password: "password" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ token: "mocked-token" });
  });
});
