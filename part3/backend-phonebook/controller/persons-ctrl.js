const Person = require('../models/Person')

const getAll = (req, res) => {
	Person.find({})
		.then(persons => {
			res.json(persons)
		})
		.catch(err => {
			console.log(err)
		})
}

const getById = (req, res) => {
	const id = req.params.id
	Person.find({ _id: id })
		.then(person => {
			res.json(person)
		})
		.catch(err => {
			console.log(err)
		})
}

const deleteById = (req, res) => {
	const id = req.params.id

	Person.findByIdAndRemove(id)
		.then(result => {
			if(result){
				res.status(204).send(result)
			}
			else{
				res.status(404).send(' Person doesn\'t exist or is already deleted. ')
			}
		})
		.catch(err => {
			console.log(err)
      
		})
}

const update = (req, res) => {
	const id = req.params.id
	const {name, number} = req.body
	
	const newPersonInfo = {
		name: name,
		number: number
	}

	// alway put the {new:true} to get the result already UPDATED
	Person.findByIdAndUpdate(id, newPersonInfo, { new: true })
		.then((result) => {
			res.json(result)
		})
		.catch((err) => {
			console.log(err)
		})
}

const create = (req, res) => {

	// Validate request
	if (!req.body.name || !req.body.number) {
		res.status(400).send({
			message: 'Content can not be empty!'
		})
		return
	}

	const newPerson = new Person({
		name: req.body.name,
		number: req.body.number
	})

	newPerson.save()
		.then(result => {
			res.json(result)
		})

}

module.exports = {
	getAll,
	getById,
	deleteById,
	update,
	create
}