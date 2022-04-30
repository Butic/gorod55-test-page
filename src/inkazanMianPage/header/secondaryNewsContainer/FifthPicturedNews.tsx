import React from "react";
import classes from "../header.module.css";

const FifthPicturedNews = () =>{
    return (
        <>
            <div className={ classes.secondaryNews__img + ' ' + classes.secondaryNews__img_5 } />
            <div className={classes.secondaryNews__text__container}>
                <h2 className={classes.secondaryNews__text__main}>Отравившее гостей кафе Eclair вновь открылось</h2>
                <p className={classes.secondaryNews__text__sub}>Рестораторы намерены отозвать товарный знак «Казань..</p>
                <span className={classes.secondaryNews__text__date}>Сегодня, 09:12</span>
            </div>
        </>
    );
};

export default FifthPicturedNews;
