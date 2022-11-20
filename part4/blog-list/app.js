const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('./utils/logger.js')
const { MONGO_DB_URI } = require('./utils/config.js')
const blogRouter = require('./routers/blog-routes')

const app = express()

// Connect to MongoDB
logger.info(`Connecting to:\n${MONGO_DB_URI}`)

const connectDb = async () => {
  await mongoose.connect(MONGO_DB_URI)
    .then(() => logger.info('Connected to MongoDB'))
    .catch((err) => logger.error('Error connecting to MongoDB', err.message))
}

connectDb().catch(err => logger.error(err))

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello :)')
})

app.use('/api/blogs', blogRouter)

module.exports = app
