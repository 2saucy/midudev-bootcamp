const express = require('express');
const { persons } = require('./db')
const personsRouter = require('./routers/persons-router');

const app = express()

// parse request of the content-type - application/json
app.use(express.json());

// parse request of the content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/persons', personsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the phonebook api :D!')
})

app.get('/info', (req, res) => {
  res.send(`
        <p>Phonebook has info for ${persons.length} people.</p>
        <p>${new Date()}</p>
        `);
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})