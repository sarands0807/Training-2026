import React, { Component } from 'react'
import car from '../shared/images/car.jpg'
import car2 from '../shared/images/car2.jpg'

class ToggleImage extends Component {
    constructor(){
    super();
    this.state={
        show:true
    };
    }

     toggle=()=>{
        this.setState({
            show:!this.state.show
        })
    }
  render() {

     let imagelink;
     if(this.state.show){
        imagelink=car2
     }
     else{
        imagelink=car
     }
    return (
      <div>
        <img  src={imagelink} alt="img" className='img1'/><br></br>
        <button onClick={this.toggle} className='but1'>Toggle Image</button>
      </div>
    )
  }
}

export default ToggleImage