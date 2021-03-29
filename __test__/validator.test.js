"use strict"

// Importing packages
const supertest = require("supertest");
const server = require("../src/server.js");

const request = supertest(server.app);

describe("Server is running", () => {
  it("handle server error", async() => {
    const response = await request.get("/person");
    expect(response.status).toEqual(500);
  });
  it("handle valid query name", async() => {
    const response = await request.get("/person?name=samer");
    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({name: "samer"});
  });
})