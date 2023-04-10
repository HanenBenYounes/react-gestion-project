const express = require("express");
const router = express.Router();
const diver = require("../controllers/diver");

router.post("/create-diver", diver.createDiver);
router.get("/fetch-diver", diver.fetchDiver);
router.delete("/delete-diver/:id", diver.delete);
router.put("/update-diver/:id", diver.update);
module.exports = router;