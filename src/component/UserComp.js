import React from 'react'

const UserComp = (props) => {
    if(props.user==="Lalith"){
        throw new("Not a user");
    }
    return <div>{props.user}</div>
  
}

export default UserComp;