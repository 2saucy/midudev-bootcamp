const { getAll, getById, deleteById, create } = require('../controller/persons-ctrl')
const router = require("express").Router()

// get all persons
router.get('/', getAll)

// get the data from one person by id.
router.get('/:id', getById)

// delete a person by id
router.delete('/:id', deleteById)

// create a person
router.post('/', create)

module.exports = router