const person = require('../controllers/persons-ctrl')
const router = require('express').Router()

// get all persons
router.get('/', person.getAll)

// get the data from one person by id.
router.get('/:id', person.getById)

// delete a person by id
router.delete('/:id', person.deleteById)

// update a person by id
router.put('/:id', person.update)

// create a person
router.post('/', person.create)

module.exports = router