import React, { Component } from 'react'
import FoodBoxService from '../services/FoodBoxService';

class CreateMenuItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            dishName: '',
            description: '',
            image:'',
            price: 0,
            available:-1,
            category:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeAvailableHandler = this.changeAvailableHandler.bind(this);
        this.saveOrUpdateMenuItem = this.saveOrUpdateMenuItem.bind(this);
    }

    
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            FoodBoxService.getMenuItemById(this.state.id).then( (res) =>{
                let menuItem = res.data;
                this.setState({dishName: menuItem.name,
                    description: menuItem.description,
                    image : menuItem.image,
                    price:menuItem.price,
                    category:menuItem.category,
                    available:menuItem.available
                });
            });
        }        
    }
    
    saveOrUpdateMenuItem = (e) => {
        e.preventDefault();
        let menuItem = {name: this.state.dishName, description: this.state.description, image: this.state.image,
        price:this.state.price, category:this.state.category, available:this.state.available};
        console.log('menuItem => ' + JSON.stringify(menuItem));

        if(this.state.id === '_add'){
            FoodBoxService.createMenuItem(menuItem).then(res =>{
                this.props.history.push('/admin');
            });
        }else{
            FoodBoxService.updateMenuItem(menuItem, this.state.id).then( res => {
                this.props.history.push('/admin');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({dishName: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changeAvailableHandler= (event) => {
        this.setState({available: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add New Dish</h3>
        }else{
            return <h3 className="text-center">Update Dish</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <p></p>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Dish Name: </label>
                                            <input placeholder="Dish Name" name="dishName" className="form-control" 
                                                value={this.state.dishName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image: </label>
                                            <input placeholder="Image" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeImageHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                                <span style={{color:"gray"}}>Starter, Main Course, Dessert</span>
                                        </div>
                                        <div className = "form-group">
                                            <label> Availbility: </label>
                                            <input placeholder="Available" name="available" className="form-control" 
                                                value={this.state.available} onChange={this.changeAvailableHandler}/>
                                                <span style={{color:"gray"}}>0-Not Available, 1-Available</span>
                                        </div>

                                        <button className="btn btn-primary" onClick={this.saveOrUpdateMenuItem}>Save</button>
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

export default CreateMenuItemComponent
