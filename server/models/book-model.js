const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name:{type:String,require:true},
        numberOfPages:{type:Number,require:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model('booksCollection',Book)