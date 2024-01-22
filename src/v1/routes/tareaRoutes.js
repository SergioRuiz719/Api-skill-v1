const express = require('express');
const router = express.Router();
const tareaController = require("../../controllers/tareaController"); 

router
    .get("/", tareaController.getAllTareas)
    .get("/:tareaId", tareaController.getOneTarea)
    .get("/usuario/:id_usuario", tareaController.getTareasByUsuario)
    .get("/usuario/:id_usuario/:tareaId", tareaController.getOneTareaByUsuario)
    .post("/", tareaController.createNewTarea)
    .patch("/:tareaId", tareaController.updateOneTarea)
    .patch("/usuario/:tareaId", tareaController.updateOneTareaEstado)
    .delete("/:tareaId", tareaController.deleteOneTarea)

module.exports = router;