import React, { Component } from 'react';

class Child extends Component{
    render(){
        return(
            <div>
             <h1>{this.props.name}</h1> 
        <h4>{this.props.price}</h4> 
            </div>
        )
    }
}
export default Child;