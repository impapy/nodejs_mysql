const User = require("../models/users.models");
const PassFile = require("../helpers/file");

exports.getallusers = async (req, res, next) => {
  try {
    const users = await (await User.findAll()).at(0);
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.creatusers = async (req, res, next) => {
  try {
    if(req.files[0].size>1700000) 
    res.status(200).json({ massage: "big size" });
   const passFiles= await PassFile.passFiles(req.files)
    let { name } = req.body;
    let user = new User(name, passFiles.at(0));
    user = await user.save();
    res.status(200).json({ massage: "user created" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "something error" });
    next(error);
  }
};

exports.getuser = async (req, res, next) => {
  try {
    let userID = req.params.id;
    let [user, _] = await User.findUserById(userID);
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.ubdateById = async (req, res, next) => {
  try {
    let userID = req.params.id;
    let { name, image } = req.body;
    let user = new User(name, image);
    user = await user.updateUserById(userID);
    res.status(200).json({ massage: "user updated" });
  } catch (error) {
    console, log(error);
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    let userID = req.params.id;

    const user = await User.deleteUserById(userID);
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console, log(error);
    next(error);
  }
};
