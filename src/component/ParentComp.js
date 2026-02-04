import React, { Component } from "react";

import ChildComp from "./ChildComp";
import PureComp from "./PureComp";
import MyReactMemoComp from "./MyReactMemoComp";




class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            empNae:"Lalith",
            empSal:20000
        }
    }
    updateState=()=>{
        this.setState((prevState)=>({empName:"Lalith Kishore",empSal:prevState.empSal+1000}));
    }

    render(){
        const{empName,empSal} = this.state;  //destrucure state
        return <div>
            <div>Employee Name: <strog>{empName}</strog></div>
            <div>Salary : <strong>{empSal}</strong></div>
            <button type="button" onClick={()=>this.updateState()}>Update State Data</button>
            <hr/>
           {/*<ChildComp uname={empName} usalary={empSal} updateSal={this.updateState}></ChildComp>*/}
           <PureComp myname={empName}></PureComp>
           <MyReactMemoComp myname={empName}></MyReactMemoComp>
            </div>


    }
}
export default ParentComp;