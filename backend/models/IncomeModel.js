const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('UserIncome', IncomeSchema)