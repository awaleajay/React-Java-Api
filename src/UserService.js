import axios from 'axios'

//const USERS_REST_API_URL = 'https://jsonplaceholder.typicode.com/users';
const USERS_REST_API_URL = 'http://localhost:8086/billing/get-products'

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();