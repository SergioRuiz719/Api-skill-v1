const express = require('express');
const router = express.Router();
const estrategiaController = require("../../controllers/estrategiaController"); 

router
    .get("/", estrategiaController.getAllEstrategias)
    .get("/:estrategiaId", estrategiaController.getOneEstrategia)
    .post("/", estrategiaController.createNewEstrategia)
    .patch("/:estrategiaId", estrategiaController.updateOneEstrategia)
    .delete("/:estrategiaId", estrategiaController.deleteOneEstrategia)

module.exports = router;