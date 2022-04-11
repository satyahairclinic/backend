const mongoose = require("mongoose");

const queryModal = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    age: { type: String },
    phone: { type: String },
    message: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("Query", queryModal)