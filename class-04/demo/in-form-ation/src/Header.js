/**
 * @file Header.js
 * @author Code Fellows
 * @description The header logic for the in-form-ation project
 */
import React from "react";

class Header extends React.Component {
    
    /**
     * Draw the header
     * 
     * @returns {object} - a react component
     */
    render(){
        return (
            <h1>Hello, {this.props.potato}!</h1>
        );
    }
}

export default Header;
