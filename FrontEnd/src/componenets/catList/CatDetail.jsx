import { useDispatch, useSelector } from "react-redux";
import MdiIcon from "../common/MdiIcon";
import RadarChart from "../chart/RadarChart";
import { useMemo } from "react";
import NoImage from "../common/NoImage";

const CatDetailPage = () => {
  const {selectedCat} = useSelector((state)=>state.cat)
  const {selectedCharc} = useSelector((state)=>state.cat)

  const calculatedSeries = useMemo(()=>{
    if(selectedCharc !== undefined){
      const {charc_id, curious, extrovert, friendly, independence, introvert, tranquil} = selectedCharc
      return [extrovert, introvert, tranquil, curious, independence, friendly ]
    }else return [];
  }, [selectedCharc])

  const charcCategories = ['외향적', '내향젹', '차분함', '호기심', '독립성', '친근함'];

  return (
    <div className="cat-detail-wrap">
      <div className="top-info-wrap">
        <div className="profile-box">
          {
            selectedCat.profile.length===0 ? <NoImage/> : <img src={`data:image/jpeg;base64,${selectedCat.profile}`} alt="Kind Profile"  />
          }
        </div>
        <div className="info-box">
          <p>품종 : {selectedCat.kind_name}</p>
          <p>이름 : {selectedCat.cat_name}</p>
          <p>나이 : {selectedCat.cat_age} 살</p>
          <p>등록일 : {selectedCat.create_date}</p>
          <p><MdiIcon name="mdiEye" /> : {selectedCat.see}</p>
          <p className="jh-mt-sm">{selectedCat.description}</p>
        </div>
      </div>
      <div className="bottom-info-wrap jh-mt-sm">
        <div className="chart-box">
          <RadarChart customCategories={charcCategories} customSeries={calculatedSeries} />
        </div>
        <div className="map-box"></div>
      </div>
    </div>
  )
} 
export default CatDetailPage;