import React, {Component} from 'react';

class ErrorBoundaryComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            isCond:false
        }
    }

    static getDerivedStateFromError(){
        return{
            isCond:true
        }

    }
    render(){
        if(this.state.isCond){
            return <strong>Not A User</strong>
        }
        return this.props.children;
    }
}