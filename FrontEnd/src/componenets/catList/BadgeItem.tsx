import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatListByKeyword, resetIsEndData } from "../../stores/actions/cat";
import { ThunkDispatch } from "../../types/action";
import { TotalInitialstate } from "../../types";

const BadgeItem = ({item}: {item: string}) =>{
  const {isLoading} = useSelector((state:TotalInitialstate)=> state.cat)
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
  const [bgName,] = useState( `bg-${bgNameList[Math.floor(Math.random() * bgNameList.length)]}`);

  const dispatch: ThunkDispatch = useDispatch();
  
  const handleOnClick = useCallback(() =>{
    if(!isLoading){
      dispatch(resetIsEndData());
      dispatch(getCatListByKeyword({keyword:item, curPage: 1}));
    }
  }, [dispatch, item, isLoading])


  return(
    <li className={`badge-item jh-mr-sm ${bgName}`} onClick={handleOnClick}>{item}</li>
  )
}
export default BadgeItem;