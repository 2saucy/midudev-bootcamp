const mongoose = require('mongoose')
const url = process.env.MONGO_DB_URI

console.log(`Connecting to: \n ${url}`)

mongoose.connect(url)
	.then(() => {
		console.log('Connected to MongoDB.')
	})
	.catch((err) => {
		console.log('Error connecting to MongoDB', err.message)
	})
