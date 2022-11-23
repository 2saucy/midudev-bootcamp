require('express-async-errors')
const bcrypt = require('bcrypt')
const User = require('../models/User.js')

const getAll = async (req, res) => {
  const data = await User.find({}).populate('blogs', { title: 1, url: 1, likes: 1 })
  res.json(data)
}

const create = async (req, res) => {
  // username must be unique
  const verifyIfExist = await User.findOne({ username: req.body.username })
  if (verifyIfExist) {
    return res.status(400).json({
      message: 'the username already exist.'
    })
  }

  // username and pass at least 3 characters
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    return res.status(400).json({
      message: 'username or password incorrect. must have at least 3 characters.'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(req.body.password, saltRounds)

  const user = new User({
    username: req.body.username,
    name: req.body.name,
    passwordHash
  })

  const data = await user.save()
  res.json(data)
}

module.exports = {
  getAll,
  create
}
