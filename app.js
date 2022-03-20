const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToDatabase =require("./dbConfigs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./server/routes")
app.use("/api", router)

app.get('/test', async (req, res, next) => {
    await connectToDatabase()
    res.status(200).send('Hello World!')
})

module.exports.handler = serverless(app);

// // app.js
// // const express = require('express')
// const sls = require('serverless-http')
// // const app = express()
// // app.post('/test', async (req, res, next) => {
// //   res.status(200).send('Hello World!')
// // })
// // app.get('/', async (req, res, next) => {
// //   res.status(200).send('Hello World!')
// // })
// const app = require("./server");
// const Config = require("./server/config")();
// const connect = require("./server/db/connection");
// module.exports.server = sls(app)

// // const PORT = Config.app.port;
// // const PORT = 5000;

// // const onStart = () => {
// // };
// // connect().then(() => {
// //   app.listen(PORT, onStart);
// // });



// const app = require("./server");
// const Config = require("./server/config")();
// // const PORT = Config.app.port;
// const PORT = 5000;
// const connect = require("./server/db/connection");

// const onStart = () => {
// };
// connect().then(() => {
//   app.listen(PORT, onStart);
// });
