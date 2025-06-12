import axios from "../helpers/axiosInstance"

const AuthModel =  class {
    async loginUser(data){
        return (await axios.post('/auth/login', data)).data
    }
    async register(data){
        return (await axios.post('/auth/register', data)).data
    }
    
    async getUser(){
        return (await axios.get('/auth/getuser')).data
    }
    
}

export default new AuthModel();