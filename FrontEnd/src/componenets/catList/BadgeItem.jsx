import { useState } from "react";

const BadgeItem = ({item}) =>{
  const bgNameList =  [
    'warmFlame',
    'nightFade',
    'springWarmth',
    'sunnyMoring',
    'rainyAshville',
    'frozenDreams',
    'dustyGrass',
    'temptingAzure',
    'heavyRain',
    'meanFruit',
    'deepBlue',
    'malibuBeach',
    'newLife',
    'morpheusDen',
    'rareWind',
    'nearMoon',
  ];
  const [bgName, setBgName] = useState( `bg-${bgNameList[Math.floor(Math.random() * bgNameList.length)]}`);
  return(
    <li className={`badge-item jh-mr-sm ${bgName}`}>{item}</li>
  )
}
export default BadgeItem;