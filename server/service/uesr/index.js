const mongoose = require('mongoose');
const { UserModel } = require("../../schema/user")

class UserService {

    createUser = async (data) => {
        // try {
            let user = new UserModel(data);
            user = await user.save();
            return user;
        // } catch (error) {
        //     throw error
        // }
    }

    updateUser = async (data) => {
        try {
            let user = await UserModel.updateOne({ _id: data._id }, { $set: data }, { useNewUrlParser: true });
            return user;
        } catch (error) {
            throw error
        }
    }

    getUserById = async (user_id) => {
        try {
            return await UserModel.findById(user_id);
        } catch (error) {
            throw error
        }
    }

    getAllUsers = async () => {
        // try {
            return await UserModel.find();
        // } catch (error) {
        //     throw error
        // }
    }

    deleteUser = async (user_id) => {
        try {
            return await UserModel.remove({ _id: user_id });
        } catch (error) {
            throw error
        }
    }
}

module.exports = new UserService();