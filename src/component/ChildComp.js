import React,{Component} from "react";

const ChildComp=(props)=>{
    return (<div>
        <h2>This is child Component</h2>
        <div>Employee Name: <strong>{props.uname}</strong></div>
        <div>Employee Salary: <strong>{props.usalary}</strong></div>
        <button type="button" onClick={()=>props.updateSal()}>Update state Data</button>
    </div>)
}

export default ChildComp