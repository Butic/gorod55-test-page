import React from "react";
import NavigationContainer from "./navigation/NavigationContainer";
import classes from "./header.module.css";
import MainNewsContainer from "./mainTextContainer/MainNewsContainer";


const HeaderContainer = () => {
    return(
        <div className={classes.header__container}>
            <NavigationContainer/>
            <MainNewsContainer/>
        </div>
    );
};

export default HeaderContainer;