const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    text : {
        type : String
    },
});

module.exports = mongoose.model('Todo',Todo);