import React, { Component } from "react";
import FoodBoxService from "../services/FoodBoxService";

class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [],
      cartItems: [],
    };

    this.addMenuItem = this.addMenuItem.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
  }

  componentDidMount() {
    FoodBoxService.getMenuItems().then((res) => {
      this.setState({ menuItems: res.data });
    });
  }

  addMenuItem(menuItem) {
    this.state.cartItems.push(menuItem);
    this.setState(this.state.cartItems);
  }

  removeMenuItem(menuItem) {
    this.setState({
      cartItems: this.state.cartItems.filter((item) => item.id !== menuItem.id),
    });
  }

  render() {
    return (
      <div>
        <div className="col-6 p-4 bg-warning">
          <h3>Cart:</h3>
           <table>
            <tbody>
              {this.state.cartItems.map((menuItem, index) => (
                <tr key={index} >
                  <td>
                    <img
                    className="mr-3 mb-2"
                      src={"./images/" + menuItem.image}
                      width="120px"
                      height="100px"
                    />
                  </td>
                  <td> {menuItem.name} </td>
                  <td>
                   
                    <b>&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;&nbsp;₹ {menuItem.price}</b>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger ml-5"
                      onClick={() => this.removeMenuItem(menuItem)}
                    >
                      <b>X</b>
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary btn-small mt-4" disabled={this.state.cartItems.length===0?true:false}>Place Order</button>
        </div>
        <p>&nbsp;</p>
        <div className="row">
          {this.state.menuItems.map((menuItem, index) => (
            <div key={index} className="card m-2" style={{ width: 22 + "rem" }}>
              <div className="card-body">
                <h5 className="card-title">{menuItem.name}</h5>
                <p></p>
                <img
                  className="small"
                  src={"./images/" + menuItem.image}
                  className="card-img-top"
                  alt="..."
                />
                <p></p>
                <p className="card-text"> {menuItem.description}</p>
                <p></p>
                <p><span style={{color:"gray"}}>{menuItem.category}</span></p>
                <p>
                  <span>
                    <b>₹{menuItem.price}</b>
                  </span>
                </p>
                <div>
                <p></p>  
                  <button
                  className="btn btn-primary"
                  onClick={() => this.addMenuItem(menuItem)}
                  disabled={menuItem.available===0?true:false}
                >
                  Add To Cart
                </button>
              {menuItem.available==0 && (
                  <span style={{color:"red"}}>&nbsp;&nbsp;&nbsp;<b>Not Available</b></span>
                  )    }
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuComponent;
