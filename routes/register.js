const express = require("express");
const { signUp, login } = require("../controllers/register.js");
const registerRouter = express.Router();

registerRouter.post("/signup", signUp);

registerRouter.post("/login", login);

module.exports = registerRouter;
