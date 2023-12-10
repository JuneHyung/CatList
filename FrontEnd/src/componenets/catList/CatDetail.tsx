import { useSelector } from "react-redux";
import MdiIcon from "../common/MdiIcon";
import RadarChart from "../chart/RadarChart";
import Spinner from "../common/Spinner";
import { useCallback, useMemo, useState } from "react";
import NoImage from "../common/NoImage";
import KakaoMap from "../kakao/KakaoMap";
import FurInfo from "./FurInfo";

const CatDetailPage = () => {
  const { catKindList, selectedCat, selectedCharc, isLoading } = useSelector((state: CatInitialState) => state);
  const [isOpenFurInfo, setIsOpenFurInfo] = useState(false);
  const [kindInfo, setKindInfo] = useState<KindInfo>({
    kind_code: '',
    kind_name: '',
    kind_profile: '',
    kind_form: '',
    kind_fur: '',
    kind_fur_pattern: '',
  })

  const calculatedSeries = useMemo(() => {
    if (selectedCharc !== undefined && selectedCharc.charc_id.length !== 0) {
      const { charc_id, curious, extrovert, friendly, independence, introvert, tranquil } = selectedCharc;
      return [extrovert, introvert, tranquil, curious, independence, friendly];
    } else return [0, 0, 0, 0, 0, 0];
  }, [selectedCharc]);

  const charcCategories = ["외향적", "내향적", "차분함", "호기심", "독립성", "친근함"];
  const toggleFeatureInfo = useCallback(() =>{
    const nextFlag = !isOpenFurInfo
    setIsOpenFurInfo(nextFlag) 
    if(nextFlag){
      const code = selectedCat.kind_code;
      setKindInfo(catKindList.find(el=>el.kind_code===code))
    }else{
      setKindInfo({
        kind_code: '',
        kind_name: '',
        kind_profile: '',
        kind_form: '',
        kind_fur: '',
        kind_fur_pattern: '',
      })
    }
  }, [catKindList, isOpenFurInfo, selectedCat.kind_code])
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="cat-detail-wrap">
          <div className="top-info-wrap">
            <div className="profile-box">{selectedCat.profile.toString().length === 0 ? <NoImage /> : <img src={`data:image/jpeg;base64,${selectedCat.profile}`} alt="Kind Profile" />}</div>
            <div className="info-box">
              <p>이름 : {selectedCat.cat_name}</p>
              <p>품종 : {selectedCat.kind_name} <MdiIcon name="mdiInformationVariantCircle" className="fur-info-icon" onClick={toggleFeatureInfo}/></p>
              {isOpenFurInfo ? <FurInfo info={kindInfo}/> : <div></div>}
              <p>집사님 : {selectedCat.user_id}</p>
              <p>나이 : {selectedCat.cat_age} 살</p>
              <p>등록일 : {selectedCat.create_date}</p>
              <p>
                <MdiIcon name="mdiEye" /> : {selectedCat.see}
              </p>
              <p className="jh-mt-sm">{selectedCat.description}</p>
            </div>
          </div>
          <div className="bottom-info-wrap jh-mt-sm">
            <div className="chart-box">
              <RadarChart customCategories={charcCategories} customSeries={calculatedSeries} />
            </div>
            <div className="map-box jh-ml-sm">
              <KakaoMap address={selectedCat.address} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CatDetailPage;
