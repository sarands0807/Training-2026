import React, {Component} from 'react';
import constantfile from '../shared/constant/constantfile';

class ChangeImageComp extends Component{
    constructor(){
        super();
        this.state={
            show:constantfile.car,name:"Super Car"
        };
    }
    Car1=()=>{
        this.setState({
            show: constantfile.car,
            name: "Super Car"
        });
    }
    Car2=()=>{
        this.setState({
            show: constantfile.car2,
            name: "Race Car"
        });
    }
    Car3=()=>{
        this.setState({
            show: constantfile.car3,
            name: "Ak Car"
        });
    }

    render(){
        return (
            <div>
                <h1>This is Task 5 - Changing Images </h1>
                <div style={{ textAlign: 'center' }}>
                    <h2>{this.state.name}</h2>
                    <img
                        src={this.state.show}
                        alt={this.state.name}
                        style={{ width: 300, height: 'auto', display: 'block', margin: '0 auto' }}
                    />
                    <div style={{ marginTop: 20 }}>
                        <button onClick={this.Car1}>Super Car</button>
                        <button onClick={this.Car2} style={{ marginLeft: 8 }}>Race Car</button>
                        <button onClick={this.Car3} style={{ marginLeft: 8 }}>Ak Car</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default ChangeImageComp;