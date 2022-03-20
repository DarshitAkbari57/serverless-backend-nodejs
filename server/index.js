const express = require("express");
const cors = require("cors");
const app = express();
// const router = require("./route");
// var jwt = require("express-jwt");

app.use(cors());
app.use(express.json());

// app.use(
//     "/api/",
//     function (req, res, next) {
//         next();
//     },
//     jwt({
//         secret: process.env.JWT_SECRET || "68a0dd92271ad9a4dca2863d54bbffa07cee",
//     }).unless({
//         path: [
//             "/api/vendor/register",
//             "/api/vendor/login",
//             "/api/vendor/forgatePassword",
//             "/api/vendor/ChangePassword",
//         ],
//     })
// );
// app.use("/api", router);
module.exports = app;
