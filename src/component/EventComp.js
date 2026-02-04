import React, { Component } from "react";

class EventComp extends Component{

    greet = () => {
        window.alert("Good Morning Guys")

    }
    welcome=(...std)=>{
        window.alert(`Welcome You ${std} in my React Sesson. `)
    }
    render(){
        return <div>
            <h2>This is Event Component</h2>
            <button type ="button" onClick={this.greet}>Greet</button>
            <button type ="button" onClick={()=>this.greet()}>Greet</button>
            <button type ="button" onClick={()=>this.welcome("Girish","Balaji")}>Welcome</button>
            <h2 onMouseOver={()=>this.welcome("Balu","Sankar")}>Hover Mouse Over Me</h2>
        </div>
    }
}

export default EventComp;