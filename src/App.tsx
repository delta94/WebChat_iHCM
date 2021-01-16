import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';
import ModalScreen from './libraries/Features/Modal/Views/ModalScreen';
import CircleAvatarScreen from './libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import CustomButtonScreen from './libraries/Features/CustomButton/Views/CustomButtonScreen';

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
];

const VideoCallScreen = (props: any) =>{
  return (
    <div className="videocall-container">
      <div className="videocall-top">
        <CircleAvatarScreen
        isOnline={false}
        src={ "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg" }
        alt=""
        class=""
        width="90px"
        height="90px"
        ></CircleAvatarScreen>
        <h4>
          { props.username }
        </h4>
        <p>Đang gọi tới</p>
      </div>

      <div className="videocall-bottom">
        <CustomButtonScreen
        text="Từ chối"
        class="default"
        onClick={ props.close }
        ></CustomButtonScreen>

        <CustomButtonScreen
        text="Trả lời"
        class="primary"
        onClick={ () => {}}
        ></CustomButtonScreen>
      </div>
    </div>
  )
}

const eleContextSignout = (close: any) => {
  return (
    <VideoCallScreen username={ "Hương Nguyễn" } close={ close }></VideoCallScreen>  
  )
}

function App() {
  const btnRef = useRef<any>(null)
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);
  const [hasModal , setHasModal] = useState<boolean>(true);
  const [guidedTourIsRunning , setGuidedTourIsRunning] = useState<boolean>(false);
  
  useEffect(() => {
    if(hasModal){
      btnRef.current && btnRef.current.click();
    }
  }, [hasModal])

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

      <ModalScreen 
        headerContent={ "Cuộc gọi video tới" }
        hasPadding={ true }
        contextHasClose={ eleContextSignout }
        open={ hasModal }
      >
        <></>
      </ModalScreen>

      <HeaderScreen toggleNavbar={ toggleNavbar } ></HeaderScreen>

      <BodyScreen hasNavbar={ hasNavbar} setGuidedTourIsRunning={ setGuidedTourIsRunning }></BodyScreen>

    </div>
  );
}

export default App;



