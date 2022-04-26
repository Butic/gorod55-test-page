import React from "react";
import { IconsEnums } from "../../../../enums/icon.enums";
import classes from "./icons.module.css";
const Icons = ({icon, targeted} : {icon: IconsEnums, targeted: boolean})=>{
    switch (icon) {
        case IconsEnums.HOME_ICON:
            return <img className={!targeted && classes.blur} src={IconsEnums.HOME_ICON} alt="home" />;
        case IconsEnums.NEWS_ICON:
            return <img className={!targeted && classes.blur} src={IconsEnums.NEWS_ICON} alt="home" />;
        default:
            return <img className={!targeted && classes.blur} src={IconsEnums.VIDEO_ICON} alt="home" />;
    };
};

export default Icons;