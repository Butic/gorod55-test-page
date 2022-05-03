import React from "react";
import NavigationContainer from "./navigation/NavigationContainer";
import classes from "./header.module.css";
import MainNewsContainer from "./mainNewsContainer/MainNewsContainer";
import SecondaryNewsContainer from "./secondaryNewsContainer/SecondaryNewsContainer";
import image from "../../img/image.png";


const HeaderContainer = () => {
    return(
        <div className={classes.header__container} style={{background: `url(${image})`}}>
            <NavigationContainer/>
            <MainNewsContainer image={image}/>
            <SecondaryNewsContainer/>
        </div>
    );
};

export default HeaderContainer;