const {Schema, model} = require('mongoose')

const phonebookSchema = new Schema({
	name: {
		type: String,
		minlength: 3,
		required: true
	},
	number: {
		type: String,
		minlength: 8,
		required: true
	}
})

phonebookSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	}
}) 

const Person = model('Persons', phonebookSchema)

module.exports = Person