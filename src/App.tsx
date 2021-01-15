import React, { useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';

const steps: any[] = [
  {
    content: <h2>Let's begin our journey!</h2>,
    locale: { skip: <strong aria-label="skip">SKIP</strong> },
    placement: 'center',
    target: 'body',
  },
  {
    content: <h2>Sticky elements</h2>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 20,
    target: '.step1',
  },
  {
    content: <h2>Sticky elements</h2>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 20,
    target: '.step2',
  },
]

function App() {
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);

  const toggleNavbar = () =>{
    setHasNavbar(prev => !prev);
  }
  


  return (
    <div className="container">
      <Joyride
        continuous={true}
        run={ true }
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

      <BodyScreen hasNavbar={ hasNavbar}></BodyScreen>

    </div>
  );
}

export default App;



