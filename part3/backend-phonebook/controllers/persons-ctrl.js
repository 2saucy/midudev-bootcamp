const Person = require('../models/Person')

const getAll = (req, res, next) => {
    Person
        .find({})
        .then(persons => {
            res.json(persons)
        })
        .catch(err => next(err))
}

const getById = (req, res, next) => {
    const id = req.params.id

    Person
        .find({ _id: id })
        .then(person => {
            if (person) {
                return res.json(person)
            }
            else {
                res.status(404).end()
            }
        })
        .catch(err => next(err))
}

const deleteById = (req, res, next) => {
    const id = req.params.id

    Person
        .findByIdAndRemove(id)
        .then(result => {
            if (result) {
                res.status(204).send(result)
            }
            else {
                res.status(404).send({ message: 'Person doesn\'t exist or is already deleted.' })
            }
        })
        .catch(err => next(err))
}

const update = (req, res, next) => {
    const id = req.params.id
    const { name, number } = req.body

    const newPersonInfo = {
        name: name,
        number: number
    }

    // alway put the {new:true} to get the result already UPDATED
    Person
        .findByIdAndUpdate(id, newPersonInfo, { new: true, runValidators: true })
        .then((result) => {
            if (result) {
                res.json(result)
            }
            else {
                res.status(404).send({ message: 'Person doesn\'t exist.' })
            }
        })
        .catch(err => next(err))
}

const create = (req, res, next) => {

    // Validate request
    if (!req.body.name || !req.body.number) {
        res.status(400).send({ message: 'Content can not be empty!' })
        return
    }

    const newPerson = new Person({
        name: req.body.name,
        number: req.body.number
    })

    newPerson
        .save()
        .then(result => {
            res.json(result)
        })
        .catch(err => next(err))

}

module.exports = {
    getAll,
    getById,
    deleteById,
    update,
    create
}