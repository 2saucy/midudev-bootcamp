const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
  title: {
    type: String,
    minlength: 4,
    required: true
  },
  author: {
    type: String,
    minlength: 4,
    required: true
  },
  url: {
    type: String,
    minlength: 10,
    required: true
  },
  likes: {
    type: Number,
    required: true
  }
})

const Blog = model('Blog', blogSchema)

module.exports = Blog
