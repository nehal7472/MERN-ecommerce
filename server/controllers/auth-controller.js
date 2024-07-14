const User = require("../models/user-model");
// const bcrypt = require("bcrypt");

// home page logic

const home = async (req, res) => {
  try {
    res.status(200).send("this is home route");
  } catch (error) {
    res.status(400).send({ meg: "page not found" });
  }
};

// home registration logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExit = await User.findOne({ email });

    if (userExit) {
      return res.status(400).json({ msg: "email already exits" });
    }

    // hash the password

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("Internal error");
    next(error)
  }
};

// User Login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExit = await User.findOne({ email });

    if (!userExit) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExit.password);

    const user = await userExit.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExit.generateToken(),
        userId: userExit._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register, login };
