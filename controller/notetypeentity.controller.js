const Notetypeentity = require("../models/notetypeentity.models");

exports.getAllNotetypeentitys = async (req, res, next) => {
  try {
    const notetypeentitys = await (await Notetypeentity.findAll()).at(0);
    res.status(200).json({ notetypeentitys });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.creatNotetypeentitys = async (req, res, next) => {
  try {
    let { typeName,isDisabled } = req.body;
    let notetypeentity = new Notetypeentity(typeName,isDisabled);
    notetypeentity = await notetypeentity.save();
    res.status(200).json({ massage: "notetypeentity created" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "something error" });
    next(error);
  }
};

exports.getNotetypeentity = async (req, res, next) => {
  try {
    let notetypeentityID = req.params.id;
    let [notetypeentity, _] = await Notetypeentity.findNotetypeentityById(notetypeentityID);
    res.status(200).json({ notetypeentity: notetypeentity });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.ubdateById = async (req, res, next) => {
  try {
    let notetypeentityID = req.params.id;
    let {typeName,isDisabled } = req.body;
    let notetypeentity = new Notetypeentity(typeName,isDisabled);
    notetypeentity = await Notetypeentity.updateNotetypeentityById(notetypeentityID);
    res.status(200).json({ massage: "notetypeentity updated" });
  } catch (error) {
    console, log(error);
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    let notetypeentityID = req.params.id;

   await Notetypeentity.deleteNotetypeentityById(notetypeentityID);
    const notetypeentitys = await Notetypeentity.findAll();
    res.status(200).json({ notetypeentitys });
  } catch (error) {
    console, log(error);
    next(error);
  }
};
