import { useCallback, useEffect, useState } from "react";

// default center position;
const centerPos = { lat: 33.450701, lng: 126.570667 };
const KakaoMap = ({ address }) => {
  // 지도 init
  const initMap = useCallback(() => {
    const { kakao } = window as any;
    const container = document.getElementById("map");
    // default 지도 옵션 set
    const options = {
      center: new kakao.maps.LatLng(centerPos.lat, centerPos.lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options)
    
    
    // geocoder로 주소 찾기.
    const geocoder = new kakao.maps.services.Geocoder();
    const bounds = new kakao.maps.LatLngBounds();

    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // marker setting
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        marker.setMap(map);

        // marker memo setting
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px; text-align:center; padding:4px;">${address}</div>`,
        });
        infowindow.open(map, marker);

        // arange setting
        bounds.extend(coords);
        map.setBounds(bounds);
      }
    });
  }, [address]);

  useEffect(() => {
    const {kakao} = window as any;
    if (kakao && kakao.maps) {
      kakao.maps.load(() => {
        initMap();
      });
    }
  }, [initMap]);

  return <div id="map" className="full"></div>;
};
export default KakaoMap;
