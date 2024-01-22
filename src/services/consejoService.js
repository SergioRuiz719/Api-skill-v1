const Consejo = require("../database/Consejo")

const getAllConsejos = async (filterParams) => {
    try {
        const allConsejos = await Consejo.find(filterParams);
        return allConsejos;
    } catch (error) {
        throw error;
    }
};

const getOneConsejo = async (consejoId) => {
    try {
        const consejo = await Consejo.findById(consejoId);

        return consejo;
    } catch (error) {
        throw error;
    }
};

const createNewConsejo = async (consejoData) => {
    try {
        const newConsejo = new Consejo(consejoData);
        const savedConsejo = await newConsejo.save();

        return savedConsejo;
    } catch (error) {
        throw error;
    }
};

const updateOneConsejo = async (consejoId, updatedConsejoData) => {
    try {
        const updatedConsejo = await Consejo.findByIdAndUpdate(consejoId, updatedConsejoData, { new: true });
        return updatedConsejo;
    } catch (error) {
        throw error;
    }
};

const deleteOneConsejo = async (consejoId) => {
    try {
        const deletedConsejo = await Consejo.findByIdAndDelete(consejoId);

        return deletedConsejo;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllConsejos,
    getOneConsejo,
    createNewConsejo,
    updateOneConsejo,
    deleteOneConsejo,
};