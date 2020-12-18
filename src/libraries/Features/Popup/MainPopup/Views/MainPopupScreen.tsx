import React, { useRef , useEffect } from 'react';
import Popup from 'reactjs-popup';
import './MainPopupScreen.css';

const MainPopupScreen = (props: any) =>{ 
  const ref = useRef<any>(null);

  // const closeTooltip = () => ref.current.close();

  function ClosePopupWhenScroll(ref: any) {
    useEffect(() => {
      document.addEventListener("wheel", () =>ref.current && ref.current.close());
      return () => {
        document.removeEventListener("wheel", () =>ref.current && ref.current.close());
      };
    }, [ref]);
  }

  ClosePopupWhenScroll(ref);
  
  return (
    <Popup
      ref={ref}
      trigger={
        props.children
      }
      position={['bottom left', 'bottom center']}
      closeOnDocumentClick={true}
      arrow={false}
      repositionOnResize={true}
    >
        <div className="mainpopup-container">
            {
            props.context
            }
        </div>
    </Popup>
  );
}

export default MainPopupScreen;