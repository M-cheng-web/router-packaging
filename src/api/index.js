import axios from 'axios'

const service = axios.create({
  baseURL: 'http://yapi.smart-xwork.cn/mock/97006/router',
  timeout: 5000
})

export default service
