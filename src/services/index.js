import axios from "axios"


export const getAllPostsAsync = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}
