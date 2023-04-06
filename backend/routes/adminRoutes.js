const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.post("/create-admin", admin.createAdmin);
router.get("/fetch-admin", admin.fetchAdmin);
router.delete("/delete-admin/:id", admin.delete);
router.put("/update-admin/:id", admin.update);
module.exports = router;
