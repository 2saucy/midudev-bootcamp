const user = require('../controllers/user-ctrl')
const router = require('express').Router()

router.get('/', user.getAll)
router.post('/', user.create)

module.exports = router
