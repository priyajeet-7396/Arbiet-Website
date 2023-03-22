import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";

const Navbar =() => {

    const menuList = MenuList.map(({url,title},index) => {
        return(
            <li key = {index} >
                <NavLink exact to={url}  className = "anchor" activeClassName="active" >{title}</NavLink>
            </li>
        );
    });

    return (
        <nav>
            <div className="logo">
                A<font>rbeit</font>
            </div>
            <ul className="menu-list">{menuList}</ul>
        </nav>
    );
};

export default Navbar;