import React, { Component } from 'react'
import FoodBoxService from '../services/FoodBoxService'

class ListMenuItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                menuItems: []
        }
        this.addMenuItem = this.addMenuItem.bind(this);
        this.editMenuItem = this.editMenuItem.bind(this);
        this.deleteMenuItem = this.deleteMenuItem.bind(this);
    }

    deleteMenuItem(id){
        FoodBoxService.deleteMenuItem(id).then( res => {
            this.setState({menuItems: this.state.menuItems.filter(menuItem => menuItem.id !== id)});
        });
    }
    viewMenuItem(id){
        this.props.history.push(`/view-menuitem/${id}`);
    }
    editMenuItem(id){
        this.props.history.push(`/add-menuitem/${id}`);
    }

    componentDidMount(){
        FoodBoxService.getMenuItems().then((res) => {
            this.setState({ menuItems: res.data});
        });
    }

    addMenuItem(){
        this.props.history.push('/add-menuitem/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Admin Dashboard - Menu Items List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMenuItem}> Add Menu Item</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Image</th>
                                    <th> Dish</th>
                                    <th> Description</th>
                                    <th> Price (₹)</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.menuItems.map(
                                        menuItem => 
                                        <tr key = {menuItem.id}>
                                            <td><img src={"./images/"+menuItem.image} width="50px" height="50px" /></td>
                                             <td> { menuItem.name} </td>   
                                             <td className="col-4"> {menuItem.description}</td>
                                             <td> ₹{menuItem.price}</td>
                                             <td>
                                             <button onClick={ () => this.viewMenuItem(menuItem.id)} className="btn btn-primary">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editMenuItem(menuItem.id)} className="btn btn-warning">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMenuItem(menuItem.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMenuItemComponent
