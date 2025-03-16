const bcrypt = require("bcryptjs");

const createSecret = async () => {
  const secret = await bcrypt.genSalt(252);
  console.log(secret);
};

createSecret();
