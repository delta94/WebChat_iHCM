import React, { useRef , useEffect } from 'react';
import Popup from 'reactjs-popup';
import './MainPopupScreen.css';

const MainPopupScreen = (props: any) =>{ 
    const ref = useRef<any>(null);


    function useOutsideAlerter(ref: any) {
      useEffect(() => {
        // Bind the event listener
        document.addEventListener("wheel", () =>ref && ref.current.close());
        // document.addEventListener("mouseup", () =>ref && ref.current.close());
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("wheel", () =>ref && ref.current.close());
          // document.removeEventListener("mouseup", () =>ref && ref.current.close());
        };
      }, [ref]);
  }

  useOutsideAlerter(ref);
    
    return (
    <Popup
        ref={ref}
      trigger={
        props.children
      }
      position={['bottom left', 'bottom center']}
      closeOnDocumentClick
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