// import logo from './logo.svg';
import { FC, useCallback, useEffect } from 'react';
import './assets/css/App.scss';
import Content from './componenets/common/Content';

const App: FC = ()=> {
  const initKakaoMapScript = useCallback(()=>{
    const {kakao} = window as any;
    if (!kakao || !kakao.maps) {
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
