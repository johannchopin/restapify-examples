import axios from 'axios'

const instance = axios.create({
  baseURL: `http://localhost:6767/api`
})

export default instance
