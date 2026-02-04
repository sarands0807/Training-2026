import React, {Component} from "react";

class StateComp extends Component{
    constructor(){
        super();

        this.state={
            ename:"Saran",
            esalary:20000,
        };

        setTimeout(()=>{this.setState({ename:"Saran",esalary:this.state.esalary+4000})},4000)

    }
    render(){
        return (
            <div>
        <h4>Welcome Saran</h4>
        <p>He is <strong>{this.state.ename}</strong></p>
        <p>His salary is <strong>{this.state.esalary}</strong></p>
        </div>
        ) 
  
}
}

export default StateComp;