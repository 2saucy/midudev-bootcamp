require('express-async-errors')
const Blog = require('../models/Blog.js')

const getAll = async (req, res, next) => {
  const data = await Blog.find({})
  res.json(data)
}

const create = async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.url) {
    return res.status(400).send({
      message: 'Content can not be empty!'
    })
  }

  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes
  })

  const data = await blog.save()

  res.status(201).json(data)
}

const deleteById = async (req, res) => {
  const id = req.params.id

  const data = await Blog.findByIdAndRemove(id)
  res.status(204).json(data)
}

const update = async (req, res) => {
  const id = req.params.id

  const data = await Blog.findByIdAndUpdate(id, req.body, { new: true })
  res.json(data)
}

module.exports = {
  getAll,
  create,
  deleteById,
  update
}
