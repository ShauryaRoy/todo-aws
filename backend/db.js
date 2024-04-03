// Todo{
//     title : string
//     description :string
//     completed :boolean
// }
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');


mongoose.connect(process.env.URI);


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}