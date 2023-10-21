import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";


const Footer = () => {

    return (

        <div className="footer">
            <div className="social-icons">
                <BiLogoInstagramAlt className="icon blue" />
                <BiLogoLinkedinSquare className="icon purple" />
                <BiMailSend className="icon blue" />
                <BsGithub className="icon purple" />
            </div>

            <select>
                <option>Colored-LightPurple</option>
                <option>Lighten-white</option>
                <option>Colored-Blue</option>
                <option>Colored-Green</option>
                <option>Colored-Grey</option>
                <option>Colored-Pink</option>
                <option>Darken-Black</option>
            </select>
        </div>
    )
}

export default Footer;