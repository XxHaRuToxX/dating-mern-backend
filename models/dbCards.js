const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    name:String,
    imgUrl: String,
})

module.exports = model('cards', cardSchema);