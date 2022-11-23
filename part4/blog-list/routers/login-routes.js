const router = require('express').Router()
const login = require('../controllers/login.js')

router.post('/', login.login)

module.exports = router
