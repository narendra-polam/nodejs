const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    salary: {
        type: Number,
        required: true
    },
    age: Number
})

module.exports = mongoose.model('employee', employeeSchema);