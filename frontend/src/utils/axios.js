import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_NODE_URL,
})
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default instance
