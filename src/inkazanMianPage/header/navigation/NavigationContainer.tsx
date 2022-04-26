import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import Search from "./Search";
import classes from "../header.module.css";

const NavigationContainer = () => {
    return(
        <nav className={classes.navigation__container} >
            <div className={classes.navigation__logoMenuContainer}>
                <Burger/>
                <Logo/>
            </div>
            <NavigationMenu/>
            <Search/>
        </nav>
    )
};

export default NavigationContainer;