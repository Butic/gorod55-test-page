import React from "react";
import classes from './BodyContainer.module.css';

const BodyContainer = () =>{
    return(
        <div className={classes.body__container}>
        <div className={classes.body__topNews}>
            <span className={classes.body__topNews__header}>Cюжет</span>
            <h2 className={classes.body__topNews__mainNews}><i>Ангела Меркель</i> посетила Москву и встретилась с Путиным</h2>
            <button className={classes.body__topNews__additionalMaterials}>12 материалов</button>
        </div>
        <div className={classes.body__bottomNews}>
            <div className={classes.body__bottomNews__container}>
                <h3 className={classes.body__bottomNews__title}>Франция отзывает послов 
из США и Австралии из-за альянса AUKUS</h3>
                <span className={classes.body__bottomNews__date}>Сегодня, 17:00</span>
            </div>
            <div className={classes.body__bottomNews__container}>
                <h3 className={classes.body__bottomNews__title}>В Новочеркасске женщина одна вынесла из вагона поезда 3,5</h3>
                <span className={classes.body__bottomNews__date}>Сегодня, 17:00</span>
            </div>
            <div className={classes.body__bottomNews__container}>
                <h3 className={classes.body__bottomNews__title}>Полиция возбудила уголовное дело МВД назвало нежелательным пребывание комика Идрака </h3>
                <span className={classes.body__bottomNews__date}>Сегодня, 17:00</span>
            </div>
        </div>
    </div>
    );
}

export default BodyContainer;
