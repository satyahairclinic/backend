const mongoose = require("mongoose");

const skinQueryModal = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    age: { type: String },
    phone: { type: String },
    message: { type: String },
    concern: { type: String },
    treatment: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("SkinQuery", skinQueryModal)