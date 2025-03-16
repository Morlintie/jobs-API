const signUp = async (req, res) => {
  res.status(200).json({ msg: "signUp" });
};

const login = async (req, res) => {
  res.status(200).json({ msg: "login" });
};

module.exports = { signUp, login };
