const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {MONGO_DB_URI} = require('./utils/config.js')
const logger = require('./utils/logger.js')
const middleware = require('./utils/middleware.js')
const personsRouter = require('./routers/persons-router.js')

const app = express()

// Connecting to MongoDB.
console.log(`Connecting to: \n ${MONGO_DB_URI}`)

mongoose
	.connect(MONGO_DB_URI)
	.then(() => {
		logger.info('Connected to MongoDB.')
	})
	.catch((err) => {
		logger.error('Error connecting to MongoDB', err.message)
	})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(middleware.requestLogger)

app.get('/', (req, res) => {
	res.send('Welcome to the phonebook api :D!')
})

app.use('/api/persons', personsRouter)

app.use(middleware.handleErrors)
app.use(middleware.unknownEndpoint)

module.exports = app