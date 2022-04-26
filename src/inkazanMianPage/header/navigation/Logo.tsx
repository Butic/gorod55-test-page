import React from "react";
import classes from "../header.module.css";

const Logo = () =>{
    return(
        <img className={classes.navigation__logo} src="img/header/Logo.svg" alt="incazan.ru" />
    );
}

export default Logo;