import React, {Component} from "react";

class ClassComp extends Component{
    render(){
    return <div>
        <h2>This is Lalith Kishore</h2>
         <p>He is <strong>{this.props.ename}</strong></p>
        <p>His job is <strong>{this.props.epost}</strong></p>
        <p>He is a Good</p>
        </div>
}
}

export default ClassComp;

