"use strict"

// Importing packages and files

require("dotenv").config();
require("./src/server.js").start(process.env.PORT);

// console.log(`Env?`, process.env.PORT);