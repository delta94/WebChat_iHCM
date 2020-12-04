import React , { useEffect , useRef , useState} from 'react';
import './PopupScreen.css';

function PopupScreen(){
    const [isActive , setIsActive] = useState(true);
    
    function useOutsideAlerter(ref: any) {
        useEffect(() => {
          function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target) && isActive) {
                setIsActive(false)
            }
          }

          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("scroll", () => setIsActive(false));
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }
    function ScrollEvent() {
        useEffect(() => {
          // Bind the event listener
          window.addEventListener("scroll", () => isActive && setIsActive(false));
          return () => {
            // Unbind the event listener on clean up
            window.removeEventListener("scroll", () => isActive && setIsActive(false));
          };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    ScrollEvent();

    if(isActive){
        return (
            <div className="popup-container" ref={wrapperRef}>
                Popup
            </div>
        )
    }

    return <div></div>;

}

export default PopupScreen;