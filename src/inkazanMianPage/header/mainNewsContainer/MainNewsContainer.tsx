import React, { useEffect, useState } from "react";
import getCroppedImg from "../../../api/cropImage";
import classes from "../header.module.css";
import analyze from 'rgbaster';

const MainNewsContainer = ({image}) =>{
    const [blur1, setBlur1] = useState(false);
    const [blur2, setBlur2] = useState(false);
    useEffect(()=>{
        const checkImage1 = async() =>{
            const croppedImgUrl1 = await getCroppedImg(image, {x: 20, y:100, width: 350, height: 350});
            const croppedImgUrl2 = await getCroppedImg(image, {x: 370, y:100, width: 350, height: 350});
            console.log(croppedImgUrl1);
            console.log(croppedImgUrl2);
            const imageData1 = await analyze(croppedImgUrl1);
            const imageData2 = await analyze(croppedImgUrl2);
            console.log(imageData1[0].color.slice(4).slice(0,-1).split(','));
            console.log(imageData2);
          }
          checkImage1();
    }, []);
    return(
        <div onClick={(e)=>{console.log(e)}}>
            <div className={classes.mainTextContainer__blur1}/>
            <div className={classes.mainTextContainer}>
                <h1 className={classes.mainTextContainer__mainText}>
                    <i>Полиция</i> возбудила уголовное дело МВД назвало нежелательным пребывание комика Идрака 
                </h1>
                <h2 className={classes.mainTextContainer__subText}>
                    Рестораторы намерены отозвать товарный знак «Казань — гастрономическая столица России»
                </h2>
                <span className={classes.mainTextContainer__date}>
                    Сегодня, 17:00
                </span>
            </div>
        </div>
    );
};

export default MainNewsContainer;
