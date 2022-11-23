require('express-async-errors')
const jwt = require('jsonwebtoken')
const Blog = require('../models/Blog.js')
const User = require('../models/User.js')

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

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({
      message: 'token missing or invalid'
    })
  }

  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes,
    user: user._id
  })

  const data = await blog.save()
  user.blogs = user.blogs.concat(data._id)
  await user.save()

  res.status(201).json(data)
}

const deleteById = async (req, res) => {
  const id = req.params.id

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({
      message: 'token missing or invalid'
    })
  }

  const blog = await Blog.findById(id)

  if (blog.user.toString() === decodedToken.id.toString()) {
    await Blog.findByIdAndRemove(id)
    res.status(204).end()
  } else {
    res.status(401).json({ message: 'you don\'t have permissions to do that' })
  }
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
