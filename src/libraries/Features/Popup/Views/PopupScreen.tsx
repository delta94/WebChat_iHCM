import React , { useEffect , useRef } from 'react';
import './PopupScreen.css';

function PopupScreen(props : any){
    const { coordPopup , eleRef } = props;
    
    // eleRef.current && console.log("Tọa độ điểm :"+ eleRef.current.offsetTop , eleRef.current.offsetLeft);
    // coordPopup && console.log("Tọa độ popup :" + coordPopup.y , coordPopup.x);
    function useOutsideAlerter(ref: any , ref2: any) {
        useEffect(() => {
          function handleClickOutside(event: any) {
            if (ref.current  && !ref.current.contains(event.target) && !props.hasPopup) {
                props.togglePopup(ref);
            }
          }

          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef , eleRef);

    if(props.hasPopup){
        console.log(wrapperRef);
        return (
            <div className="popup-container" style={{
                top:`${ coordPopup.y }px`,
                left:`${ coordPopup.x }px`
            }}
            ref={wrapperRef}
            >
                { props.children }
            </div>
        )
    }

    return <div></div>;

}

export default PopupScreen;