import { useSelector } from "react-redux";
import MdiIcon from "../common/MdiIcon";
import RadarChart from "../chart/RadarChart";

const CatDetailPage = () => {
  const {selectedCat} = useSelector((state)=>state.cat)
  
  return (
    <div className="cat-detail-wrap">
      <div className="top-info-wrap">
        <div className="profile-box">
          <img src={`images/cats/cat${selectedCat.kind_code.replace(/catKind/g, "")}.jpg`} alt="catProfile" />
        </div>
        <div className="info-box">
          <p>품종 : {selectedCat.kind_name}</p>
          <p>이름 : {selectedCat.cat_name}</p>
          <p>나이 : {selectedCat.cat_age} 살</p>
          <p>등록일 : {selectedCat.create_date}</p>
          <p><MdiIcon name="mdiEye"></MdiIcon>{selectedCat.see}</p>
        </div>
      </div>
      <div className="bottom-info-wrap">
        <div className="chart-box">
          <RadarChart />
        </div>
        <div className="map-box"></div>
      </div>
    </div>
  )
} 
export default CatDetailPage;