const db = require("../models");
const bcrypt = require("bcrypt");
const user = db.User;

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword)
        throw "one of the password is incorrect";

      if (password.length < 8) throw "Password minimal 8 character";

      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);

      await user.create({
        username,
        email,
        password: hashPass,
      });
      res.status(200).send("Register Success !");
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
