import axios from '../request/index'
export default {
    addInfoFetch: (data) => {
        return axios.post('/api/add', data)
    },
    addCount :(data)=>{
        return axios.post('/api/addCount',data)
    },
    // 获取统计数据
    getInsurance :()=>{
        return axios.get('/api/getInsurance')
    }
}