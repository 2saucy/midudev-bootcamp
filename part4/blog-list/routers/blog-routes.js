const blog = require('../controllers/blog-ctrl.js')
const router = require('express').Router()

router.get('/', blog.getAll)
router.post('/', blog.create)
router.delete('/:id', blog.deleteById)
router.put('/:id', blog.update)

module.exports = router
