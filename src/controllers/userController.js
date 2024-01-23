const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.send({ status: "OK", data: allUsers });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userService.getOneUser(userId);

        if (!user) {
            return res.status(404).send({ status: "Error", message: `User with ID ${userId} not found` });
        }

        res.send({ status: "OK", data: user });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const createNewUser = async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(400).send({ status: "Error", message: "Email is required" });
        }

        const emailAlreadyRegistered = await userService.isEmailAlreadyRegistered(req.body.email);

        if (emailAlreadyRegistered) {
            return res.status(400).send({ status: "Error", message: "Email is already registered" });
        }

        const userData = {
            email: req.body.email,
            id_estilo: req.body.id_estilo,
            nombre: req.body.nombre,
            edad: req.body.edad,
        };

        const newUser = await userService.createNewUser(userData);

        res.status(201).send({ status: "OK", data: newUser });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};


const updateOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "At least one field to update is required" });
        }

        const updatedUserData = req.body;

        const updatedUser = await userService.updateOneUser(userId, updatedUserData);

        if (!updatedUser) {
            return res.status(404).send({ status: "Error", message: `User with ID ${userId} not found` });
        }

        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneUserEstilo = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!Object.keys(req.body.id_estilo).length) {
            return res.send({ status: "Error", message: "At least one field to update is required" });
        }

        const updatedUserData = req.body;

        const updatedUser = await userService.updateOneUser(userId, updatedUserData);

        if (!updatedUser) {
            return res.send({ status: "Error", message: `User with ID ${userId} not found` });
        }

        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res.send({ status: "Error", message: error.message });
    }
};

const updateOneUserPerfil = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!Object.keys().length) {
            return res.send({ status: "Error", message: "At least one field to update is required" });
        }

        const updatedUserData = req.body;

        const updatedUser = await userService.updateOneUser(userId, updatedUserData);

        if (!updatedUser) {
            return res.send({ status: "Error", message: `User with ID ${userId} not found` });
        }

        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res.send({ status: "Error", message: error.message });
    }
};

const deleteOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedUser = await userService.deleteOneUser(userId);

        if (!deletedUser) {
            return res.send({ status: "Error", message: `User with ID ${userId} not found` });
        }

        res.send({ status: "OK", message: `User with ID ${userId} deleted successfully` });
    } catch (error) {
        res.send({ status: "Error", message: error.message });
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    updateOneUserEstilo,
    updateOneUserPerfil,
    deleteOneUser,
};