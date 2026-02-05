import React, { Component } from 'react';


class SaranComp extends Component {
    render() {
        const { fname, lname, email, contact, city } = this.props;

        return (
            <div>
                <h1>This is Task 1 - Creating class comp</h1>
                <p>My first name is: <strong>{fname}</strong> and my last name is: <strong>{lname}</strong></p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Contact:</strong> {contact}</p>
                <p><strong>City:</strong> {city}</p>
            </div>
        );
    }
}


export default SaranComp;