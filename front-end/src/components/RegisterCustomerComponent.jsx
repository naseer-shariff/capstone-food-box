import React, { Component } from 'react'
import RegisterCustomerService from '../services/RegisterCustomerService';

class RegisterCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            first_Name: '',
            lastName: '',
            email:'',
            address: '',
            payment:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePaymentHandler = this.changePaymentHandler.bind(this);
       
        this.saveOrUpdateMenuItem = this.saveOrUpdateMenuItem.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            RegisterCustomerService.getCustomerById(this.state.id).then( (res) =>{
                let customer = res.data;
                this.setState({firstName: customer.firstname,
                    lastName: customer.lastname,
                    Email : customer.email,
                    address:customer.address,
                    payment:customer.payment
                });
            });
        }        
    }
    saveOrUpdateMenuItem = (e) => {
        e.preventDefault();
        let customer = {name: this.state.first_name, description: this.state.lastname, address: this.state.address,
        payment:this.state.payment, email:this.state.email};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.id === '_add'){
            RegisterCustomerService.addCustomer(customer).then(res =>{
                this.props.history.push('/customer');
            });
        }else{
            RegisterCustomerService.getCustomerById(customer, this.state.id).then( res => {
                this.props.history.push('/customer');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changePaymentHandler= (event) => {
        this.setState({payment: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/menuitems');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Create Your Account</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Dish Name" name="dishName" className="form-control" 
                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image: </label>
                                            <input placeholder="Image" name="image" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.payment} onChange={this.changePaymentHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMenuItem}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default RegisterCustomerComponent
