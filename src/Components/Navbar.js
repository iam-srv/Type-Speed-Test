import React from "react";
import Title from "./title";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {


    return (
        <div className="navbar">
            <Title />
            <BiUserCircle id="user-login" />
        </div>
    )
}

export default Navbar;