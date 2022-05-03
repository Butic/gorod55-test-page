import React, { useMemo, useState } from 'react';
import classes from '../header.module.css';
import { checkImage, getNecessaryStyle } from '../../../api/checkCropImage';
import { BLURE_SIDE } from '../../../enums/blureSide.enum';

const MainNewsContainer = ({ image }) => {
    
  const [blur, setBlur] = useState({ blur_left: 0, blur_right: 0 });
  const [blurName, setBlurName] = useState('');

  const callCheckImage = async () => {
    const result = await checkImage(image);
    setBlur(result);
    setBlurName(getNecessaryStyle(result));
  };

  useMemo(callCheckImage, [image]);
  
  let containerName = classes.mainTextContainer;
  
  console.log(blur);
  
  switch (blurName) {
    case BLURE_SIDE.LEFT:
      blur.blur_left === 2
        ? (containerName = classes.mainTextContainer__blur_left2)
        : (containerName = classes.mainTextContainer__blur_left1);
      break;
    case BLURE_SIDE.RIGHT:
      blur.blur_right === 2
        ? (containerName = classes.mainTextContainer__blur_right2)
        : (containerName = classes.mainTextContainer__blur_right1);
      break;
  }

  return (
    <div>
      <div className={containerName} />
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
