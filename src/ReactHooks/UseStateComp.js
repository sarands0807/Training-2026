import React, { useState } from 'react'

const UseStateComp = () => {
    const[count,setCount] =useState(0);
    const[name,setName]=useState("Panchasil");
    const[course,setCourse]=useState(["ReactJS","Angular","Python","Java","MySql"]);

    const updateCount=()=>
        setCount(count+1);
}
    return (
        <div>
            <h2>This is UseStateComp</h2>
            <p>Count:<strong>{count}</strong></p>
            <button type='button' onClick={()=>updateCount()}>count++</button>{" "}
             <button type='button' onClick={()=>setCount(count+1)}>count++</button><hr/>
             <p>Name:<strong>{name}</strong></p>
             <button type="button" onClick={()=>setName("Saran")}>change name</button>
             <ul>
                {course.map(getValue,index)=>{

                }
             </ul>

        </div>
    )

export default UseStateComp;
