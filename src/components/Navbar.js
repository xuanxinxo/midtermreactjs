import React, { Component } from 'react';
import
{
    NavLink,
    
}from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        

        <div className="topnav">
        <div>
        <NavLink activeclassName="active" to={'/'}>Home</NavLink>
        <NavLink activeclassName="active" to={'/add'}>Add</NavLink>
        <NavLink activeclassName="active" to={'/topic'}>Admin</NavLink>
        </div>
        </div>

        
    
    )
  }
}
export default Navbar;