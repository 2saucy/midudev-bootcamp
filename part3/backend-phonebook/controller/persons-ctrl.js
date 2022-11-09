const { persons } = require('../db')

const generateId = () => {
	const maxId = persons.length > 0
		? Math.max(...persons.map(n => n.id))
		: 0
	return maxId + 1
}

const getAll = (req, res) => {
	res.send(persons)
}

const getById = (req, res) => {
	const id = req.params.id
	const data = persons.find((person) => person.id == id)
	if (data) {
		res.send(data)
	}
	else {
		res.status(404).send('We can\'t find a person with that id.')
	}
}

const deleteById = (req, res) => {
	const id = req.params.id
	const index = persons.findIndex((person) => person.id == id)

	if (index !== -1) {
		persons.splice(index, 1)
		res.send(persons)
	}
	else {
		res.status(404).send('We can\'t find a person with that id.')
	}
}

const update = (req, res) => {
	const id = req.params.id
	const index = persons.findIndex((person) => person.id == id)
	if (index !== -1) {
		persons[index].number = req.body.number
		res.send(persons[index])
	}
	else {
		res.status(404).send('We can\'t find a person with that id.')
	}
}

const create = (req, res) => {

	// Validate request
	if (!req.body.name || !req.body.number) {
		res.status(400).send({
			message: 'Content can not be empty!'
		})
		return
	}

	const id = generateId()

	const newPerson = {
		name: req.body.name,
		number: req.body.number,
		id: id
	}

	const verifyName = persons.find((person) => person.name === newPerson.name)

	if (verifyName) {
		res.status(406).send({
			message: 'Name already exist in the phonebook.'
		})
		return
	}
	else {
		persons.push(newPerson)
		res.send(newPerson)
	}
}

module.exports = {
	getAll,
	getById,
	deleteById,
	update,
	create
}