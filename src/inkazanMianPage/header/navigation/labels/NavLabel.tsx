import React from "react";
import classes from "./navLabel.module.css";

const NavLabel = ({text, targeted} : {text : string, targeted: boolean}) => 
<span className={targeted ? classes.nav__label : classes.nav__label_blur} >{text}</span>

export default NavLabel;