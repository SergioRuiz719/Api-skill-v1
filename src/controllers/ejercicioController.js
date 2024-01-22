const ejercicioService = require("../services/ejercicioService");

const getAllEjercicios = async (req, res) => {
    try {
        const allEjercicios = await ejercicioService.getAllEjercicios();
        res.send({ status: "OK", data: allEjercicios });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneEjercicio = async (req, res) => {
    try {
        const ejercicioId = req.params.ejercicioId;

        const ejercicio = await ejercicioService.getOneEjercicio(ejercicioId);

        if (!ejercicio) {
            return res.status(404).send({ status: "Error", message: `Ejercicio with ID ${consejoId} not found` });
        }

        res.send({ status: "OK", data: ejercicio });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const createNewEjercicio = async (req, res) => {
    try {
        if (!req.body.Ejercicio) {
            return res.status(400).send({ status: "Error", message: "ejercicio is required" });
        }
        const ejercicioData = {
            id_estilo: req.body.id_estilo,
            Ejercicio: req.body.Ejercicio,
        };

        const newEjercicio = await ejercicioService.createNewEjercicio(ejercicioData);

        res.status(201).send({ status: "OK", data: newEjercicio });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneEjercicio = async (req, res) => {
    try {
        const ejercicioId = req.params.ejercicioId;
        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "At least one field to update is required" });
        }
        const updatedEjercicioData = req.body;
        const updatedEjercicio= await ejercicioService.updateOneEjercicio(ejercicioId, updatedEjercicioData);
        if (!updatedEjercicio) {
            return res.status(404).send({ status: "Error", message: `Ejercicio with ID ${ejercicioId} not found` });
        }

        res.send({ status: "OK", data: updatedEjercicio });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const deleteOneEjercicio= async (req, res) => {
    try {
        const ejercicioId = req.params.ejercicioId;

        const deletedEjercicio = await ejercicioService.deleteOneEjercicio(ejercicioId);

        if (!deletedEjercicio) {
            return res.status(404).send({ status: "Error", message: `Ejercicio with ID ${ejercicioId} not found` });
        }

        res.send({ status: "OK", message: `Ejercicio with ID ${ejercicioId} deleted successfully` });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};


module.exports = {
    getAllEjercicios,
    getOneEjercicio,
    createNewEjercicio,
    updateOneEjercicio,
    deleteOneEjercicio,
};