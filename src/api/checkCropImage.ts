import getCroppedImg from './cropImage';
import analyze from 'rgbaster';
import { BLURE_SIDE } from '../enums/blureSide.enum';

export const getNecessaryStyle = ({ blur_left = 0, blur_right = 0 }) => {
  if (blur_left === blur_right && blur_left === 0) return BLURE_SIDE.NOTHING;
  if (blur_right > blur_left) return BLURE_SIDE.RIGHT;
  else return BLURE_SIDE.LEFT;
};

const checkBlurValue = (
  imageData: [{ color: string; count: number }] = [
    { color: 'rgb(0,0,0)', count: 1 },
  ]
) => {
  if(imageData[0].color.slice(4).slice(0, -1).split(',').filter(el=>Number(el)>=150).length === 0) return 0
  if (imageData.length > 20000) {
    return Number(imageData[0].color.slice(4).slice(0, -1).split(',').filter(el=>Number(el)>=150).length) >=
      2 && [...imageData].filter((el) => el.count >= 250).length > 25
      ? 2
      : 1;
  } else if (
    Number(imageData[0].color.slice(4).slice(0, -1).split(',')[2]) > 150 
    // && imageData.length > 4000
  )
    return 1;
  return 0;
};
// 0 - nothing to change
// 1 - need minor changed
// 2 - need major changes
export const checkImage = async (image: string) => {
  const croppedImgUrl1: unknown = await getCroppedImg(image, {
    x: 20,
    y: 100,
    width: 350,
    height: 350,
  });
  
  const croppedImgUrl2: unknown = await getCroppedImg(image, {
    x: 370,
    y: 100,
    width: 350,
    height: 350,
  });

  const imageData1: [{ color: string; count: number }] = await analyze(
    croppedImgUrl1
  );

  const imageData2: [{ color: string; count: number }] = await analyze(
    croppedImgUrl2
  );
    
  return {
    blur_left: checkBlurValue(imageData1),
    blur_right: checkBlurValue(imageData2),
  };
};
