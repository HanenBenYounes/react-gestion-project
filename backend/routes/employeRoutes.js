const express = require("express");
const router = express.Router();
const employe = require("../controllers/employe");

router.post("/create-employe", employe.createEmploye);
router.get("/fetch-employe", employe.fetchEmploye);
router.delete("/delete-employe/:id", employe.delete);
router.put("/update-employe/:id", employe.update);
module.exports = router;
