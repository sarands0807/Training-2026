import React from "react";


const FriendComp = ({ fname, lname, email, contact, city }) => {
    return (
        <div>
            <div><h1>This is Task 2 - Creating functional comp</h1></div>
            <h3>First Name: {fname} Last Name: {lname}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Contact:</strong> {contact}</p>
            <p><strong>City:</strong> {city}</p>
        </div>
    );
};


export default FriendComp;