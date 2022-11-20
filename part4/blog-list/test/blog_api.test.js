const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test.skip('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test.skip('there are two notes', async () => {
  const res = await api.get('/api/blogs')
  expect(res.body).toHaveLength(2)
})

test.skip('guchooo makes the first blog', async () => {
  const res = await api.get('/api/blogs')
  expect(res.body[0].author).toBe('guchooo')
})

test.skip('a valid blog can be added', async () => {
  const blog = {
    title: 'test',
    author: 'test',
    url: 'test',
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const res = await api.get('/api/blogs')
  const authors = res.body.map(a => a.author)

  expect(res.body).toHaveLength(res.body.length)
  expect(authors).toContain('guchooo')
})

test.skip('the unique identifier property is called id', async () => {
  const res = await api
    .get('/api/blogs')
    .expect(200)
  expect(res.body[0].id).toBeDefined()
})

test.skip('likes property is missing from the request', async () => {
  const blog = {
    title: 'test',
    author: 'test',
    url: 'test'
  }

  const res = await api
    .post('/api/blogs')
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  expect(res.body.likes).toBeDefined()
  expect(res.body.likes).toBe(0)
})

test.skip('various properties of the request are missing', async () => {
  const blog = {
    author: 'test',
    likes: 3
  }

  await api
    .post('/api/blogs')
    .send(blog)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})
