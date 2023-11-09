const mongoose = require('mongoose')

module.exports = function (app) {
      mongoose.connect('mongodb+srv://ecomDev:developEcom@cluster0.dmui1lw.mongodb.net/devBook', {
        useNewUrlParser: true
    })
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}