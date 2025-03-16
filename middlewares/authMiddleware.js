const { UnauthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Bearer null")) {
    throw new UnauthorizedError("You are not authorized");
  }

  const token = authHeader.split(" ")[1];

  let tokenData;

  try {
    tokenData = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new UnauthorizedError("Token is not valid, please login again");
  }

  req.user = { name: tokenData.name, userId: tokenData.userId };

  next();
};

module.exports = authMiddleware;
