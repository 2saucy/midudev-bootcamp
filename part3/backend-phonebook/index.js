const app = require('./app.js')
const logger = require('./utils/logger.js')
const {PORT} = require('./utils/config.js')

app.listen(PORT, () => {
	logger.info(`Server is running on port ${PORT}`)
})