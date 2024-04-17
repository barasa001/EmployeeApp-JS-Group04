const mongoose = require('mongoose');

// Define the schema for the employee
const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create the model using the schema
const Employeedb = mongoose.model('employeedb', employeeSchema);

module.exports = Employeedb;