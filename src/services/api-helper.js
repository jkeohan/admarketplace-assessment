const axios = require('axios');


export const getAllPosts = async () => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return resp.data;
}

export const getSinglePost = async (postId) => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  console.log('getSinglePost', resp)
  return resp.data;
}

export const getComments = async (postId) => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  return resp.data;
}

export const postComment = async (comment) => {
  const resp = await axios.post('https://jsonplaceholder.typicode.com/comments', JSON.stringify(comment))
  return resp.data;
}





