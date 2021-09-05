import React, { Component } from 'react'
import FoodBoxService from '../services/FoodBoxService'

class ViewMenuItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            menuItem: {}
        }
    }

    componentDidMount(){
        FoodBoxService.getMenuItemById(this.state.id).then( res => {
            this.setState({menuItem: res.data});
        })
    }

    render() {
        return (
            <div>
                <p></p><p></p>
                <h3> View Dish Details</h3>
                <div>
                <p></p><p></p>
              <div className="col-4"></div>      
              <div className="col-9 card m-12" style={{ width: 22 + "rem" }}>
              <div className="card-body">
                <h5 className="card-title">Dish Name: {this.state.menuItem.name}</h5>
                <p></p>
                <img
                  className="small"
                  src={"../images/" + this.state.menuItem.image}
                  className="card-img-top"
                  alt="..."
                />
                <p></p>
                <p className="card-text"><b>Description:</b><br /> {this.state.menuItem.description}</p>
                <p>
                  <span>
                    <b>Price:</b> ₹{this.state.menuItem.price}
                  </span>
                </p>
                <div>
                    
              <span><b>Availability: </b></span>    
              {this.state.menuItem.available===0 && (
                  <span style={{color:"red"}}>&nbsp;&nbsp;&nbsp;<b>Not Available</b></span>
                  )    }
                  {this.state.menuItem.available===1 && (
                  <span>&nbsp;&nbsp;&nbsp;Available</span>
                  )    }
                </div>
              </div>
              
            </div>

                </div>
                
            </div>
        )
    }
}

export default ViewMenuItemComponent
