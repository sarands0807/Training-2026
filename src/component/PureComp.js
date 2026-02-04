
import React, {Component, PureComponent} from "react";

class PureComp extends PureComponent{
    render() {
        console.log("my pure component");
        return(
            <div>
                <h2>This is MYPure Component</h2>
                <p>My name is : {this.props.myname}</p>
            </div>
        )
    }

}export default PureComp;