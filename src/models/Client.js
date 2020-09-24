const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },

    lastname: {
        type: String,
        required: true
    },

    profession: {
        type: String,
        required: false
    },

    age: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});   

mongoose.model('Client', ClientSchema);