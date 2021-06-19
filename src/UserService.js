import axios from 'axios'

//const USERS_REST_API_URL = 'https://jsonplaceholder.typicode.com/users';
const USERS_REST_API_URL = 'http://localhost:8086/billing/get-products'
const CUSTOMERS_REST_API_URL = 'http://localhost:8086/billing/get-customer'

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    getCustomers(){
        return axios.get(CUSTOMERS_REST_API_URL);
    }
}

export default new UserService();