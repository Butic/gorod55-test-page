import React from "react";
import classes from "../header.module.css";
import FifthPicturedNews from "./FifthPicturedNews";
import FirstPicturedNews from "./FirstPicturedNews";
import FourthPicturedNews from "./FourthPicturedNews";
import SecondPicturedNews from "./SecondPicturedNewx";
import UnpicturedNews from "./UnpicturedNews";

const SecondaryNewsContainer = () =>{
    return (
        <div className={classes.secondaryNews__primary_container}>
            <div className={classes.secondaryNews__secondary_container}>
                <FirstPicturedNews/>
            </div>
            <div className={classes.secondaryNews__secondary_container}>
                <SecondPicturedNews />
            </div>
            <div className={classes.secondaryNews__secondary_container}>
                <UnpicturedNews/>
            </div>
            <div className={classes.secondaryNews__secondary_container}>
                <FourthPicturedNews/>
            </div>
            <div className={classes.secondaryNews__secondary_container}>
                <FifthPicturedNews/>
            </div>
        </div>
    );
}

export default SecondaryNewsContainer;