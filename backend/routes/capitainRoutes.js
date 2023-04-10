const express = require("express");
const router = express.Router();
const capitain = require("../controllers/capitain");

router.post("/create-capitain", capitain.createCapitain);
router.get("/fetch-capitain", capitain.fetchCapitain);
router.delete("/delete-capitain/:id", capitain.delete);
router.put("/update-capitain/:id", capitain.update);
module.exports = router;