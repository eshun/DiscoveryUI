import axios from 'axios';
import { Message } from 'element-ui';

// 创建一个axios实例
const request = axios.create({
  baseURL: process.env.SERVICE_API,
  timeout: 5000 // request timeout
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  //response => response,
  response => response.data,
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default request
