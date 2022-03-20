const express = require("express");
const router = express.Router();
const UserController = require("../../Controller/user")
// const {Authenticate} =require("../../middleware/auth")
// router.use(VendorMiddleware.validate);

// get methods

// get all user detail
router.get("/",UserController.getAllUsers);

// get individual user by id
router.get("/:id", UserController.getUserDetail);


// // post methods
router.post("/", UserController.createUser);



// // put methods

// // update user
router.put("/", UserController.updateUser);


// // delete methods

// // delete user by id
router.delete("/:id", UserController.deleteUser);

module.exports = router;
