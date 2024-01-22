const express = require('express');
const router = express.Router();
const ejercicioController = require("../../controllers/ejercicioController"); 

router
    .get("/", ejercicioController.getAllEjercicios)
    .get("/:ejercicioId", ejercicioController.getOneEjercicio)
    .post("/", ejercicioController.createNewEjercicio)
    .patch("/:ejercicioId", ejercicioController.updateOneEjercicio)
    .delete("/:ejercicioId", ejercicioController.deleteOneEjercicio)

module.exports = router;