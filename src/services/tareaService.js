const Tarea = require("../database/Tarea");

const getAllTareas = async (filterParams) => {
    try {
        const allTareas = await Tarea.find(filterParams);
        return allTareas;
    } catch (error) {
        throw error;
    }
};

const getOneTarea = async (tareaId) => {
    try {
        const tarea = await Tarea.findById(tareaId);

        return tarea;
    } catch (error) {
        throw error;
    }
};

const getTareasByUsuario = async (id_usuario) => {
    try {
        const tareasByUsuario = await Tarea.find({ id_usuario });
        return tareasByUsuario;
    } catch (error) {
        throw error;
    }
};

const getOneTareaByUsuario = async (id_usuario, tareaId) => {
    try {
        // Utilizamos findOne para obtener una única tarea del usuario
        const tarea = await Tarea.findOne({ _id: tareaId, id_usuario });

        return tarea;
    } catch (error) {
        throw error;
    }
};

const createNewTarea = async (tareaData) => {
    try {
        const newTarea = new Tarea(tareaData);
        const savedTarea = await newTarea.save();

        return savedTarea;
    } catch (error) {
        throw error;
    }
};

const updateOneTarea = async (tareaId, updatedTareaData) => {
    try {
        const updatedTarea = await Tarea.findByIdAndUpdate(tareaId, updatedTareaData, { new: true });

        return updatedTarea;
    } catch (error) {
        throw error;
    }
};

const updateOneTareaEstado = async (tareaId, updatedTareaData) => {
    try {
        const updatedTarea = await Tarea.findByIdAndUpdate(tareaId, updatedTareaData, { new: true });

        return updatedTarea;
    } catch (error) {
        throw error;
    }
};

const deleteOneTarea = async (tareaId) => {
    try {
        const deletedTarea = await Tarea.findByIdAndDelete(tareaId);

        return deletedTarea;
    } catch (error) {
        throw error;
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