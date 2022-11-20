
const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    return console.log(...params)
  }
}

const error = (...params) => {
  return console.log(...params)
}

module.exports = {
  info,
  error
}
