const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../errors/index.js");
const User = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.generateJWT();

  res.status(StatusCodes.CREATED).json({ name: user.name, token: token });
};

const login = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide credentials");
  }
  const user = await User.findOne({ email: email, name: name });
  if (!user) {
    throw new NotFoundError("User not found");
  }
  const isPasswordCorrect = await user.verifyPassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedError("You are not authorized to login");
  }

  const token = user.generateJWT();

  res.status(StatusCodes.OK).json({ name: user.name, token: token });
};

module.exports = { signUp, login };
