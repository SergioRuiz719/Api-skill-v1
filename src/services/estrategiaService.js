const Estrategia = require("../database/Estrategia");

const getAllEstrategias = async (filterParams) => {
    try {
        const allEstrategias = await Estrategia.find(filterParams);
        return allEstrategias;
    } catch (error) {
        throw error;
    }
};

const getOneEstrategia = async (estrategiaId) => {
    try {
        const estrategia = await Estrategia.findById(estrategiaId);

        return estrategia;
    } catch (error) {
        throw error;
    }
};

const createNewEstrategia = async (estrategiaData) => {
    try {
        const newEstrategia = new Estrategia(estrategiaData);
        const savedEstrategia = await newEstrategia.save();

        return savedEstrategia;
    } catch (error) {
        throw error;
    }
};

const updateOneEstrategia = async (estrategiaId, updatedEstrategiaData) => {
    try {
        const updatedEstrategia = await Estrategia.findByIdAndUpdate(estrategiaId, updatedEstrategiaData, { new: true });

        return updatedEstrategia;
    } catch (error) {
        throw error;
    }
};

const deleteOneEstrategia = async (estrategiaId) => {
    try {
        const deletedEstrategia = await Estrategia.findByIdAndDelete(estrategiaId);

        return deletedEstrategia;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllEstrategias,
    getOneEstrategia,
    createNewEstrategia,
    updateOneEstrategia,
    deleteOneEstrategia,
};