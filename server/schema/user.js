const mongoose = require("mongoose")

const enums = require("../../constant/enums.json");

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        countryCode: { type: String },
        mobile:{ type: String }
    },
    { timestamps: true }
);

const UserModel = mongoose.models.User || new mongoose.model("User", userSchema);
module.exports = { UserModel }