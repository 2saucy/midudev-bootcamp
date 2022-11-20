const Blog = require('../models/Blog.js')

const getAll = (req, res) => {
  Blog
    .find({})
    .then((blogs) => res.json(blogs))
}

const create = (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => res.status(201).json(result))
}

module.exports = {
  getAll,
  create
}
