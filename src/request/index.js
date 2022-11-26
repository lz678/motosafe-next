import axios from 'axios'
//设置全局请求路径
axios.defaults.baseURL = 'http://www.motosafe.xyz:3000/'
//设置请求超时时间
axios.defaults.timeout = 10000
// const reg = /^(http|https)/
//axios请求拦截器（request）
axios.interceptors.request.use(
    // 在请求发送之前做一些事
    config => {
        return config
    },
    // 当出现请求错误是做一些事
    err => {
        console.log('err' + err)
    }
)


//axios响应拦截器
axios.interceptors.response.use(
    res => {
        let code = res.code
        if (code === 1001) {
        }
        else {
            return res.data
        }
    }
)
export default axios