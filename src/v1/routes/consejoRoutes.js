const express = require('express');
const router = express.Router();
const consejoController = require("../../controllers/consejoController"); 

router
    .get("/", consejoController.getAllConsejos)
    .get("/:consejoId", consejoController.getOneConsejo)
    .post("/", consejoController.createNewConsejo)
    .patch("/:consejoId", consejoController.updateOneConsejo)
    .delete("/:consejoId", consejoController.deleteOneConsejo)

module.exports = router;