const estrategiaService = require("../services/estrategiaService");

const getAllEstrategias = async (req, res) => {
    try {
        const allEstrategias = await estrategiaService.getAllEstrategias();
        res.send({ status: "OK", data: allEstrategias });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneEstrategia = async (req, res) => {
    try {
        const estrategiaId = req.params.estrategiaId;

        const estrategia = await estrategiaService.getOneEstrategia(estrategiaId);

        if (!estrategia) {
            return res.status(404).send({ status: "Error", message: `Estrategia with ID ${estrategiaId} not found` });
        }

        res.send({ status: "OK", data: estrategia });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const createNewEstrategia = async (req, res) => {
    try {
        if (!req.body.Estrategia) {
            return res.status(400).send({ status: "Error", message: "Estrategia is required" });
        }
        const estrategiaData = {
            id_estilo: req.body.id_estilo,
            Estrategia: req.body.Estrategia,
        };

        const newEstrategia = await estrategiaService.createNewEstrategia(estrategiaData);

        res.status(201).send({ status: "OK", data: newEstrategia });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneEstrategia = async (req, res) => {
    try {
        const estrategiaId = req.params.estrategiaId;
        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "At least one field to update is required" });
        }
        const updatedEstrategiaData = req.body;
        const updatedEstrategia = await estrategiaService.updateOneEstrategia(estrategiaId, updatedEstrategiaData);
        if (!updatedEstrategia) {
            return res.status(404).send({ status: "Error", message: `Estrategia with ID ${estrategiaId} not found` });
        }

        res.send({ status: "OK", data: updatedEstrategia });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const deleteOneEstrategia = async (req, res) => {
    try {
        const estrategiaId = req.params.estrategiaId;

        const deletedEstrategia = await estrategiaService.deleteOneEstrategia(estrategiaId);

        if (!deletedEstrategia) {
            return res.status(404).send({ status: "Error", message: `Estrategia with ID ${estrategiaId} not found` });
        }
        
        res.send({ status: "OK", message: `Estrategia with ID ${estrategiaId} deleted successfully` });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

module.exports = {
    getAllEstrategias,
    getOneEstrategia,
    createNewEstrategia,
    updateOneEstrategia,
    deleteOneEstrategia,
};