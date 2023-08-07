const notetypeentity = require("../controller/notetypeentity.controller");
const router = require("express").Router();

router.get("/", notetypeentity.getAllNotetypeentitys);
router.post("/", notetypeentity.creatNotetypeentitys);
router.get("/:id", notetypeentity.getNotetypeentity);
router.put("/:id", notetypeentity.ubdateById);
router.delete("/:id", notetypeentity.deleteById);

module.exports = router;

