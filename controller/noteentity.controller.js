const Noteentity = require("../models/noteentity.models");
const PassFile = require("../helpers/file");

exports.getallNoteentitys = async (req, res, next) => {
  try {
    const noteentitys = await (await Noteentity.findAll()).at(0);
    res.status(200).json({ noteentitys });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.creatNoteentitys = async (req, res, next) => {
  try {
    if(req.files[0].size>1700000) 
    res.status(200).json({ massage: "big size" });
   const passFiles= await PassFile.passFiles(req.files)
    let {noteTitle, noteMessageBody,userId,notetypeentityId } = req.body;
    let noteentity = new Noteentity(noteTitle, noteMessageBody,userId,passFiles.at(0),notetypeentityId);
    noteentity = await noteentity.save();
    res.status(200).json({ massage: "noteentity created" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "something error" });
    next(error);
  }
};

exports.getNoteentity = async (req, res, next) => {
  try {
    let noteentityID = req.params.id;
    let [noteentity, _] = await Noteentity.findNoteentityById(noteentityID);
    res.status(200).json({ noteentity: noteentity });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.ubdateById = async (req, res, next) => {
  try {
    let noteentityID = req.params.id;
    let { noteTitle, noteMessageBody,userId,noteMediaFiles,notetypeentityId } = req.body;
    let noteentity = new Noteentity(noteTitle, noteMessageBody,userId,noteMediaFiles,notetypeentityId);
    noteentity = await Noteentity.updateNoteentityById(noteentityID);
    res.status(200).json({ massage: "noteentity updated" });
  } catch (error) {
    console, log(error);
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    let noteTitleID = req.params.id;

    await Noteentity.deleteNoteentityById(noteTitleID);
    const noteTitles = await NoteTitle.findAll();
    res.status(200).json({ noteTitles });
  } catch (error) {
    console, log(error);
    next(error);
  }
};
