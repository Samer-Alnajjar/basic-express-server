"use strict"

// Importing packages
const supertest = require("supertest");
const server = require("../src/server.js");

const request = supertest(server.app);

describe("Server is running", () => {
  it("handle invalid routes", async() => {
    const response = await request.get("/foo");
    expect(response.status).toEqual(404);
  });
  it("handle invalid method", async() => {
    const response = await request.get("/bad");
    expect(response.status).toEqual(500);
  });
})
