const user = require("../Controllers/user");
const express = require("express");
const router = express.Router();

router.post("/saveDetails", user.saveDetails);
router.get("/checkEmail", user.checkEmail);

module.exports = router;
