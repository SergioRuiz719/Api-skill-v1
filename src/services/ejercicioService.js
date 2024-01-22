const Ejercicio = require("../database/Ejercicio")

const getAllEjercicios = async (filterParams) => {
    try {
        const allEjercicios = await Ejercicio.find(filterParams);
        return allEjercicios;
    } catch (error) {
        throw error;
    }
};

const getOneEjercicio = async (ejercicioId) => {
    try {
        const ejercicio = await Ejercicio.findById(ejercicioId);

        return ejercicio;
    } catch (error) {
        throw error;
    }
};

const createNewEjercicio = async (ejercicioData) => {
    try {
        const newEjercicio = new Ejercicio(ejercicioData);
        const savedEjercicio = await newEjercicio.save();

        return savedEjercicio;
    } catch (error) {
        throw error;
    }
};

const updateOneEjercicio = async (ejercicioId, updatedEjercicioData) => {
    try {
        const updatedEjercicio = await Ejercicio.findByIdAndUpdate(ejercicioId, updatedEjercicioData, { new: true });

        return updatedEjercicio;
    } catch (error) {
        throw error;
    }
};

const deleteOneEjercicio = async (ejercicioId) => {
    try {
        const deletedEjercicio = await Ejercicio.findByIdAndDelete(ejercicioId);

        return deletedEjercicio;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllEjercicios,
    getOneEjercicio,
    createNewEjercicio,
    updateOneEjercicio,
    deleteOneEjercicio,
};