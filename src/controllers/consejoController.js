const consejoService = require("../services/consejoService");

const getAllConsejos = async (req, res) => {
    try {
        const allConsejos = await consejoService.getAllConsejos();
        res.send({ status: "OK", data: allConsejos });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneConsejo = async (req, res) => {
    try {
        const consejoId = req.params.consejoId;

        const consejo = await consejoService.getOneConsejo(consejoId);

        if (!consejo) {
            return res.status(404).send({ status: "Error", message: `Consejo with ID ${consejoId} not found` });
        }

        res.send({ status: "OK", data: consejo });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const createNewConsejo = async (req, res) => {
    try {
        if (!req.body.Consejo) {
            return res.status(400).send({ status: "Error", message: "consejo is required" });
        }
        const consejoData = {
            id_estilo: req.body.id_estilo,
            Consejo: req.body.Consejo,
        };

        const newConsejo = await consejoService.createNewConsejo(consejoData);

        res.status(201).send({ status: "OK", data: newConsejo });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneConsejo = async (req, res) => {
    try {
        const consejoId = req.params.consejoId;
        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "At least one field to update is required" });
        }
        const updatedConsejoData = req.body;
        const updatedConsejo = await consejoService.updateOneConsejo(consejoId, updatedConsejoData);
        if (!updatedConsejo) {
            return res.status(404).send({ status: "Error", message: `Consejo with ID ${consejoId} not found` });
        }

        res.send({ status: "OK", data: updatedConsejo });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const deleteOneConsejo = async (req, res) => {
    try {
        const consejoId = req.params.consejoId;

        const deletedConsejo = await consejoService.deleteOneConsejo(consejoId);

        if (!deletedConsejo) {
            return res.status(404).send({ status: "Error", message: `Consejo with ID ${consejoId} not found` });
        }

        res.send({ status: "OK", message: `Consejo with ID ${consejoId} deleted successfully` });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};


module.exports = {
    getAllConsejos,
    getOneConsejo,
    createNewConsejo,
    updateOneConsejo,
    deleteOneConsejo,
};