const users = require("../controller/users.controller");
const router = require("express").Router();
const express = require('express');
const path = require('path');
const {upload}= require('../helpers/filehelper');

router.get("/", users.getallusers);
router.post("/", express.static(path.join(__dirname, 'uploads')),upload.array('files'), users.creatusers);
router.get("/:id", users.getuser);
router.put("/:id", users.ubdateById);
router.delete("/:id", users.deleteById);

module.exports = router;
