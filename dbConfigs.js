const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
const connectToDatabase = () => {
    if (isConnected) {
        console.log("existing connection")
        return Promise.resolve();
    }
    console.log("new connection")
    return mongoose.connect(process.env.MONGODB_URL)
        .then(db => { 
        isConnected = db.connections[0].readyState;
        });
}
module.exports = { connectToDatabase };