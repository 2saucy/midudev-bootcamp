const blog = require('../controllers/blog-ctrl.js')
const router = require('express').Router()

router.get('/', blog.getAll)
router.post('/', blog.create)

module.exports = router
