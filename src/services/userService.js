const User = require("../database/User")


const getAllUsers = async (filterParams) => {
    try {
        const allUsers = await User.find(filterParams);
        return allUsers;
    } catch (error) {
        throw error;
    }
};

const getOneUser = async (userId) => {
    try {
        const user = await User.findById(userId);

        return user;
    } catch (error) {
        throw error;
    }
};


const createNewUser = async (userData) => {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        return savedUser;
    } catch (error) {
        throw error;
    }

};

const updateOneUser = async (userId, updatedUserData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const updateOneUserEstilo = async (userId, updatedUserData) => {
    try {
        const updatedUserEstilo = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
        return updatedUserEstilo;
    } catch (error) {
        throw error;
    }
};

const updateOneUserPerfil = async (userId, updatedUserData) => {
    try {
        const updatedUserEstilo = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
        return updatedUserEstilo;
    } catch (error) {
        throw error;
    }
};

const deleteOneUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        return deletedUser;
    } catch (error) {
        throw error;
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
}