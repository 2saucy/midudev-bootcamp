const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const totalBlogs = blogs.length
  if (totalBlogs === 0) {
    return 0
  } else if (totalBlogs === 1) {
    return blogs[0].likes
  } else if (totalBlogs > 1) {
    const sum = blogs.reduce((accumulator, obj) => {
      return accumulator + obj.likes
    }, 0)
    return sum
  } else {
    return null
  }
}

const favoriteBlog = (blogs) => {
  const fav = _.maxBy(_.map(blogs, (blog) => {
    return { title: blog.title, author: blog.author, likes: blog.likes }
  }), blog => { return blog.likes })
  return fav
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return
  }

  const data = _.countBy(_.map(blogs, (blog) => {
    return blog.author
  }))

  const result = _.maxBy(_.map(_.keys(data), key => {
    return { author: key, blogs: data[key] }
  }), 'blogs')

  return result
}

// const mostLikes = (blogs) => {

// }

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
