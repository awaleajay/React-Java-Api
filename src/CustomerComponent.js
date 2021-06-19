import React from 'react';
import UserService from './UserService';

class CustomerComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            customers:[]
        }
    }

    componentDidMount(){
        UserService.getCustomers().then((response) => {
            console.log(response.data)
            this.setState({ customers: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center">Customer  List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Id</td>
                            <td> Name</td>
                            <td> City</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                                customers => 
                                <tr key = {customers.customerId}>
                                     <td> {customers.customerId}</td>   
                                     <td> {customers.customerName}</td>   
                                     <td> {customers.customerCity}</td>   
                                      
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CustomerComponent