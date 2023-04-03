const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.post("/create-admin", admin.createAdmin);
module.exports = router;
