const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIResponse = require('../../utils/APIResponse');
const UserService = require("../../service/uesr")
const { connectToDatabase } = require('../../../dbConfigs');

class UserController {

    createUser = async (req,res) => {
        // try {
            await connectToDatabase();
            let response = await UserService.createUser(req.body)
            return res.status(200)
            .json(new APIResponse(response, "user fetched successfully", httpStatus.OK));
            // let user = new UserModel(data);
            // user = await user.save();
            // return user;
        // } catch (error) {
        //     throw error
        // }
    }

    updateUser = async (req,res) => {
        try {
            await connectToDatabase();
            let response = await UserService.updateUser(req.body)
            return res.status(200)
            .json(new APIResponse(response, "user fetched successfully", httpStatus.OK));
            // let user = await UserModel.updateOne({ _id: data._id }, { $set: data }, { useNewUrlParser: true });
            // return user;
        } catch (error) {
            throw error
        }
    }

    getUserDetail = async (req,res) => {
        try {
            await connectToDatabase();
            let response = await UserService.getUserById(req.params.id)
            return res.status(200)
            .json(new APIResponse(response, "user fetched successfully", httpStatus.OK));
            // return await UserModel.findById(user_id);
        } catch (error) {
            throw error
        }
    }

    getAllUsers = async (req,res) => {
        // try {
            await connectToDatabase();
            console.log("in get user ")
            let response = await UserService.getAllUsers()
            return res.status(200)
            .json(new APIResponse(response, "user fetched successfully", httpStatus.OK));
            // return await UserService.find();
        // } catch (error) {
        //     throw error
        // }
    }

    deleteUser = async (req,res) => {
        try {
            await connectToDatabase();
            let response = await UserService.deleteUser(req.params.id)
            return res.status(200)
            .json(new APIResponse(response, "user fetched successfully", httpStatus.OK));
            // return await UserModel.remove(re);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new UserController();