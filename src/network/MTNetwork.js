import axios from '../request/index'
export default {
    addInfoFetch: (data) => {
        return axios.post('/api/add', data)
    },
    addCount :(data)=>{
        return axios.post('/api/addCount',data)
    }
}