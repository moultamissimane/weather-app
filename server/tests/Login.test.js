const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

const User = require("../models/User");
require("dotenv").config();

// const { setupDB } = require("./test-setup");

/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

// setupDB("test");

// describe("Login", () => {
//   it("should login a user", async () => {
//     const user = {
//       email: "",
//       password: "",
//     };
//     const res = await request(app).post("/login").send(user);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("token");
//   });
// });

describe('Login Route', () => {
    it('should return a token when valid credentials are provided', async () => {
      const mockUser = { email: 'test@example.com', password: 'password' };
      const res = await request(app).post('/login').send(mockUser);
  
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });