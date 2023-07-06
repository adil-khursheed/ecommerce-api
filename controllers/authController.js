const { User } = require("../model/userModel");

// Create User
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne(
      { email: req.body.email },
      "id name email"
    ).exec();
    if (!user) {
      res.status(401).json({ message: "User not found!" });
    } else if (user.password === req.body.password) {
      res.status(200).json(user);
    } else {
      res.status(401).json("Invalid Credentials!");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
