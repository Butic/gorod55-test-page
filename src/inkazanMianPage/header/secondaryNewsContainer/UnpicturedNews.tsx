import React from "react";
import classes from "../header.module.css";

const UnpicturedNews = () =>{
    return (
        <>
            <div className={classes.secondaryNews__text__container2}>
                <h2 className={classes.secondaryNews__text__main}>Полиция возбудила уголовное дело МВД назвало нежелательным пребывание комика Идрака </h2>
                <p className={classes.secondaryNews__text__sub}>elegram в России с субботы ограничит функционирование...</p>
                <span className={classes.secondaryNews__text__date}>Сегодня, 17:00</span>
            </div>
        </>
    );
};

export default UnpicturedNews;
