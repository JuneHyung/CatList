import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getCatListByKeyword, resetIsEndData } from "../../stores/actions/cat";

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

  const dispatch = useDispatch();
  
  const handleOnClick = useCallback(() =>{
    dispatch(resetIsEndData());
    dispatch(getCatListByKeyword({keyword:item, curPage: 1}));
  }, [dispatch, item])


  return(
    <li className={`badge-item jh-mr-sm ${bgName}`} onClick={handleOnClick}>{item}</li>
  )
}
export default BadgeItem;