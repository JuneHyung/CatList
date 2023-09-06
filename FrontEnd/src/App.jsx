// import logo from './logo.svg';
import { useCallback, useEffect } from 'react';
import './assets/css/App.scss';
import Content from './componenets/common/Content';

const App = ()=> {
  const initKakaoMapScript = useCallback(()=>{
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      const key = process.env.REACT_APP_KAKAO_API_KEY;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${key}&libraries=services`
      document.head.appendChild(script)
    }    
  },[])

  useEffect(()=>{
    initKakaoMapScript();
  },[initKakaoMapScript])
  return (
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;
