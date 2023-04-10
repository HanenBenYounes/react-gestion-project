const express = require("express");
const router = express.Router();
const technicien = require("../controllers/technicien");

router.post("/create-technicien", technicien.createTechnicien);
router.get("/fetch-technicien", technicien.fetchTechnicien);
router.delete("/delete-technicien/:id", technicien.delete);
router.put("/update-technicien/:id", technicien.update);
module.exports = router;
