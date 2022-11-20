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

// // Do it later...return the author who has more blogs, and the sum of blogs
// const mostBlogs = (blogs) => {

// }
// // Do it later...return the author who has more likes, and the sum of likes
// const mostLikes = (blogs) => {

// }

module.exports = {
  dummy,
  totalLikes
}
