const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info('---')
  logger.info('Method:', req.method)
  logger.info('Path:', req.path)
  logger.info('Body:', req.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ message: 'unknown endpoint' })
}

const handleErrors = (err, req, res, next) => {
  logger.error(err.message)
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'malformatted id' })
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message })
  } else if (err.name === 'JsonWebTokenError') {
    return res.status(400).json({ message: 'invalid token' })
  }
  next(err)
}

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  }
  next()
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  handleErrors,
  tokenExtractor
}
