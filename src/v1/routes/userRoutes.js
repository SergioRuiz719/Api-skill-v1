const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController")

router
    .get("/", userController.getAllUsers)
    .get("/:userId", userController.getOneUser)
    .post("/", userController.createNewUser)
    .patch("/:userId", userController.updateOneUser)
    .patch("/estilo/:userId", userController.updateOneUserEstilo)
    .patch("/perfil/:userId", userController.updateOneUserPerfil)
    .delete("/:userId", userController.deleteOneUser)

module.exports = router;