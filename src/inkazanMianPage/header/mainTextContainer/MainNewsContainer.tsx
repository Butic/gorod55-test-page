import React from "react";
import classes from "../header.module.css";

const MainNewsContainer = () =>{
    return(
        <div className={classes.mainTextContainer}>
            <h1 className={classes.mainTextContainer__mainText}>
            Полиция возбудила уголовное дело МВД назвало нежелательным пребывание комика Идрака 
            </h1>
            <h2 className={classes.mainTextContainer__subText}>
            Рестораторы намерены отозвать товарный знак «Казань — гастрономическая столица России»
            </h2>
            <span className={classes.mainTextContainer__date}>
            Сегодня, 17:00
            </span>
        </div>
    );
};

export default MainNewsContainer;
