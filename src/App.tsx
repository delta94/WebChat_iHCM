import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';

const steps: any[] = [
  {
    content: <h3>Chào mừng bạn đến ứng dụng chat của iHCM</h3>,
    locale: { 
      skip: <strong aria-label="skip">Bỏ qua</strong>,
      next:"Tiếp theo"
    },
    placement: 'center',
    target: 'body',
  },
  {
    content: <h3>Chức năng tìm kiếm trò chuyện</h3>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 20,
    target: '.step1',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    locale: { 
      last:"Cuối cùng",
      back:"Trở lại",
    },
  }
]

function App() {
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);
  const [guidedTourIsRunning , setGuidedTourIsRunning] = useState<boolean>(true);

  const toggleNavbar = () =>{
    setHasNavbar(prev => !prev);
  }

  return (
    <div className="container">
      <Joyride
        continuous={true}
        run={ guidedTourIsRunning }
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        steps={steps}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />

      <HeaderScreen toggleNavbar={ toggleNavbar } ></HeaderScreen>

      <BodyScreen hasNavbar={ hasNavbar} setGuidedTourIsRunning={ setGuidedTourIsRunning }></BodyScreen>

    </div>
  );
}

export default App;



