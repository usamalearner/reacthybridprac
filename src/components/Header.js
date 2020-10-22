import React, { Component } from 'react';

class Header extends Component{
    render(){
        console.log("props==>",this.props)
        return(
            <div className="state">{this.props.page} {this.props.name} {this.props.email}
            <div className="Header">header</div>
            <button onClick={()=>this.props.getProps("how are you")}></button>
            </div>
        )
    }
}


export default Header;