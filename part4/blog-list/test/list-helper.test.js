const listHelper = require('../utils/list_helper')

test.skip('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe.skip('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]
  const listWithManyBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(15)
  })
})

describe.skip('favorite blogs', () => {
  const blogs = [
    {
      _id: '54a676234d17f85a422aa71b',
      title: 'The correct way to use your habilities',
      author: 'sinatraa',
      url: 'http://www.aimtrainersdontwork.com/sinatraa/The-correct-way-to use-your-habilities',
      likes: 2,
      __v: 0
    },
    {
      _id: '76234d5a422aa71b54a617f8',
      title: 'From iron to inmortal in one day',
      author: 'tarik',
      url: 'http://www.aimtrainersdontwork.com/tarik/From-iron-to-inmortal-in-one-day',
      likes: 7,
      __v: 0
    },
    {
      _id: 'aa71b54a675a4226234d17f8',
      title: 'How to aim like a pro',
      author: 'TenZ',
      url: 'http://www.aimtrainersdontwork.com/tenz/How-to-aim-like-a-pro',
      likes: 5,
      __v: 0
    },
    {
      _id: 'd17f85a422aa71b54a676234',
      title: 'How I reach top 1 Radiant',
      author: 'tarik',
      url: 'http://www.aimtrainersdontwork.com/tarik/How-I-reach-top-1-Radiant',
      likes: 15,
      __v: 0
    }
  ]

  test('return the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: 'How I reach top 1 Radiant',
      author: 'tarik',
      likes: 15
    })
  })
})

describe.skip('author with most blogs', () => {
  const blogs = [
    {
      _id: '54a676234d17f85a422aa71b',
      title: 'The correct way to use your habilities',
      author: 'TenZ',
      url: 'http://www.aimtrainersdontwork.com/sinatraa/The-correct-way-to use-your-habilities',
      likes: 2,
      __v: 0
    },
    {
      _id: '76234d5a422aa71b54a617f8',
      title: 'From iron to inmortal in one day',
      author: 'tarik',
      url: 'http://www.aimtrainersdontwork.com/tarik/From-iron-to-inmortal-in-one-day',
      likes: 7,
      __v: 0
    },
    {
      _id: 'aa71b54a675a4226234d17f8',
      title: 'How to aim like a pro',
      author: 'tarik',
      url: 'http://www.aimtrainersdontwork.com/tenz/How-to-aim-like-a-pro',
      likes: 5,
      __v: 0
    },
    {
      _id: 'd17f85a422aa71b54a676234',
      title: 'How I reach top 1 Radiant',
      author: 'tarik',
      url: 'http://www.aimtrainersdontwork.com/tarik/How-I-reach-top-1-Radiant',
      likes: 15,
      __v: 0
    }
  ]
  test('return the author with more blogs, and the number of blogs', () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({
      author: 'tarik',
      blogs: 3
    })
  })
})
