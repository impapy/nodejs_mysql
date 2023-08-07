const noteentitys = require("../controller/noteentity.controller");
const router = require("express").Router();
const express = require('express');
const path = require('path');
const {upload}= require('../helpers/filehelper');

router.get("/", noteentitys.getallNoteentitys);
router.post("/",express.static(path.join(__dirname, 'uploads')),upload.array('files'), noteentitys.creatNoteentitys);
router.get("/:id", noteentitys.getNoteentity);
router.put("/:id", noteentitys.ubdateById);
router.delete("/:id", noteentitys.deleteById);

module.exports = router;
