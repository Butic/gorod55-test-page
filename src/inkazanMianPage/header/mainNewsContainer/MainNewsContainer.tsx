import React, { useMemo, useState } from 'react';
import classes from '../header.module.css';
import { checkImage, getNecessaryStyle } from '../../../api/checkCropImage';
import { BLURE_SIDE } from '../../../enums/blureSide.enum';
import BlurContainer from './BlurContainer';

const MainNewsContainer = ({ image }) => {

  return (
    <div>
      <BlurContainer image={image} />
      <div className={classes.mainTextContainer}>
        <h1 className={classes.mainTextContainer__mainText}>
          <i>Полиция</i> возбудила уголовное дело МВД назвало нежелательным
          пребывание комика Идрака
        </h1>
        <h2 className={classes.mainTextContainer__subText}>
          Рестораторы намерены отозвать товарный знак «Казань — гастрономическая
          столица России»
        </h2>
        <span className={classes.mainTextContainer__date}>Сегодня, 17:00</span>
      </div>
    </div>
  );
};

export default MainNewsContainer;
