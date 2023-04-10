const express = require("express");
const router = express.Router();
const boat = require("../controllers/boat");

router.post("/create-boat", boat.createBoat);
router.get("/fetch-boat", boat.fetchBoat);
router.delete("/delete-boat/:id", boat.delete);
router.put("/update-boat/:id", boat.update);
module.exports = router;
