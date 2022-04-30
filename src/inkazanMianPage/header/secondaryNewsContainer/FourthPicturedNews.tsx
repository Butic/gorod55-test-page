import React from "react";
import classes from "../header.module.css";

const FourthPicturedNews = () =>{
    return (
        <>
            <div className={ classes.secondaryNews__img + ' ' + classes.secondaryNews__img_4 } />
            <div className={classes.secondaryNews__text__container}>
                <h2 className={classes.secondaryNews__text__main}>Новые районы Касабланки. Хотели бы так жить?</h2>
                <p className={classes.secondaryNews__text__sub}>Рестораторы намерены отозвать товарный знак «Казань..</p>
                <span className={classes.secondaryNews__text__date}>Сегодня, 09:12</span>
            </div>
        </>
    );
};

export default FourthPicturedNews;
