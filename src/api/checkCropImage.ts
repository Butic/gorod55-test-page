import getCroppedImg from "./cropImage";
import analyze from 'rgbaster';

export const checkImage1 = async(image: string) =>{
    // 0 - nthing to change
    // 1 - need minor changed
    // 2 - need major changes
    let firstFlag:number = 0;
    let secondFlag:number = 0;
    const croppedImgUrl1 = await getCroppedImg(image, {x: 20, y:100, width: 350, height: 350});
    const croppedImgUrl2 = await getCroppedImg(image, {x: 370, y:100, width: 350, height: 350});
    console.log(croppedImgUrl1);
    console.log(croppedImgUrl2);
    const imageData1 = await analyze(croppedImgUrl1);
    const imageData2 = await analyze(croppedImgUrl2);
    console.log(imageData1[0].color.slice(4).slice(0,-1).split(','));
    console.log(imageData2);
  }