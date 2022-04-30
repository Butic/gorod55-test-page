import React from "react";
import NavigationContainer from "./navigation/NavigationContainer";
import classes from "./header.module.css";
import MainNewsContainer from "./mainNewsContainer/MainNewsContainer";
import SecondaryNewsContainer from "./secondaryNewsContainer/SecondaryNewsContainer";


const HeaderContainer = () => {
    return(
        <div className={classes.header__container}>
            <NavigationContainer/>
            <MainNewsContainer/>
            <SecondaryNewsContainer/>
        </div>
    );
};

export default HeaderContainer;