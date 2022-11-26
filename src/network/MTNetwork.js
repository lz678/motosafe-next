import axios from '../request/index'
export default {
    addInfoFetch: (data) => {
        return axios.post('/add', data)
    },
    addCount :(data)=>{
        return axios.post('/addCount',data)
    }
}