const tareaService = require("../services/tareaService");

const getAllTareas = async (req, res) => {
    try {
        const allTareas = await tareaService.getAllTareas();
        res.send({ status: "OK", data: allTareas });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneTarea = async (req, res) => {
    try {
        const tareaId = req.params.tareaId;

        const tarea = await tareaService.getOneTarea(tareaId);

        if (!tarea) {
            return res.status(404).send({ status: "Error", message: `Tarea with ID ${tareaId} not found` });
        }

        res.send({ status: "OK", data: tarea });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getTareasByUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const tareasByUsuario = await tareaService.getTareasByUsuario(id_usuario);
        res.send({ status: "OK", data: tareasByUsuario });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const getOneTareaByUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const tareaId = req.params.tareaId;
        const tarea = await tareaService.getOneTareaByUsuario(id_usuario, tareaId);

        if (!tarea) {
            return res.status(404).send({ status: "Error", message: `Tarea not found for user ${id_usuario} with ID ${tareaId}` });
        }

        res.send({ status: "OK", data: tarea });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const createNewTarea = async (req, res) => {
    try {
        if (!req.body.Tarea) {
            return res.status(400).send({ status: "Error", message: "Tarea is required" });
        }
        const tareaData = {
            id_usuario: req.body.id_usuario,
            fecha: req.body.fecha,
            Tarea: req.body.Tarea,
            Activado: req.body.Activado
        };

        const newTarea = await tareaService.createNewTarea(tareaData);

        res.status(201).send({ status: "OK", data: newTarea });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneTarea = async (req, res) => {
    try {
        const tareaId = req.params.tareaId;
        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "At least one field to update is required" });
        }
        const updatedTareaData = req.body;
        const updatedTarea = await tareaService.updateOneTarea(tareaId, updatedTareaData);
        if (!updatedTarea) {
            return res.status(404).send({ status: "Error", message: `Tarea with ID ${tareaId} not found` });
        }

        res.send({ status: "OK", data: updatedTarea });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const updateOneTareaEstado = async (req, res) => {
    try {
        const tareaId = req.params.tareaId;

        if (!Object.keys(req.body).length) {
            return res.status(400).send({ status: "Error", message: "Al menos un campo para actualizar es requerido" });
        }

        const updatedTareaData = req.body;

        // Verifica si el campo "estado" está presente en los datos actualizados
        if ('estado' in updatedTareaData) {
            // Valida que el valor del campo "estado" sea 0 o 1
            if (updatedTareaData.estado !== 0 && updatedTareaData.estado !== 1) {
                return res.status(400).send({ status: "Error", message: "El campo estado debe ser 0 o 1" });
            }
        }

        const updatedTarea = await tareaService.updateOneTarea(tareaId, updatedTareaData);

        if (!updatedTarea) {
            return res.status(404).send({ status: "Error", message: `Tarea con ID ${tareaId} no encontrada` });
        }

        res.send({ status: "OK", data: updatedTarea });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

const deleteOneTarea = async (req, res) => {
    try {
        const tareaId = req.params.tareaId;

        const deletedTarea = await tareaService.deleteOneTarea(tareaId);

        if (!deletedTarea) {
            return res.status(404).send({ status: "Error", message: `Tarea with ID ${tareaId} not found` });
        }

        res.send({ status: "OK", message: `Tarea with ID ${tareaId} deleted successfully` });
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message });
    }
};

module.exports = {
    getAllTareas,
    getOneTarea,
    getTareasByUsuario,
    getOneTareaByUsuario,
    createNewTarea,
    updateOneTarea,
    updateOneTareaEstado,
    deleteOneTarea,
};