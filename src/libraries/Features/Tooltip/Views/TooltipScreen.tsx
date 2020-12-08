import React , { useEffect , useRef , useState} from 'react';
import './TooltipScreen.css';

function TooltipScreen(props : any){
    const { coordPopup } = props;

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
          function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target) && !props.hasPopup) {
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
    useOutsideAlerter(wrapperRef);

    if(props.hasPopup){
        return (
            <div className="popup-container" style={{
                top:`${ coordPopup.y }px`,
                left:`${ coordPopup.x }px`
            }}
            ref={wrapperRef}
            >
                TooltipScreen
            </div>
        )
    }

    return <div></div>;

}

export default TooltipScreen;