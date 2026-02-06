import { useState } from 'react'

const UseStateComp = () => {
    const[count,setCount] =useState(0);
    const[name,setName]=useState("Panchasil");
    const[course,setCourse]=useState(["ReactJS","Angular","Python","Java","MySql"]);

    const updateCount=()=>
        setCount(count+1);
}
export default UseStateComp;
