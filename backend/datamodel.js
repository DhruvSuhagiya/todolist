const mongoose = require('mongoose');
const items = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    item: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('todolists', items);