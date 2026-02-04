import React, {Component} from "react";


const MyReactMemoComp = (props) => {
    console.log("this is Reac momo comp");
    return(
        <div>
            <h2>This is MyReactMemoComp</h2>
            <p>My name is : {props.myname}</p>

        </div>
    )


}
export default React.memo(MyReactMemoComp)