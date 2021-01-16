import React from 'react';
import { ENUM_KIND_OF_MESSAGE } from '../../../../Constants/KindOfMessage';
import IconImageScreen from '../../../IconImage/Views/IconImageScreen';
import ModalScreen from '../../../Modal/Views/ModalScreen';
import './DetailPopupScreen.css';

function DetailPopupScreen(props : any){
    const { listEles , eleHeader } = props;
    const showDetailPopup = () =>{
        return listEles.map((ele:any , index:number) =>{
            if(ele.eleContext){

                return  <ModalScreen  open={ false } headerContent={ "Cài đặt thông báo" } context={ ele.eleContext } hasPadding={ true }>
                            <li onClick={ ele.onClick }>
                                <IconImageScreen src={ ele.icon } alt="replay" class={""}></IconImageScreen>
                                <span className="app-mainfont">
                                    { ele.text }
                                </span>           
                            </li>
                        </ModalScreen>
            }
            return (
                <li onClick={ ele.onClick }>
                    <IconImageScreen src={ ele.icon } alt="replay" class={""}></IconImageScreen>
                    <span className="app-mainfont">
                        { ele.text }
                    </span>
                </li>
            )
        })
    }
    return (
        <div className="detailpopup-container">
            {
                eleHeader && eleHeader
            }
            <ul className="detailpopup-detail">
                {
                    showDetailPopup()
                }
            </ul>

                  {/* <ModalScreen headerContent={ "Cài đặt thông báo" } context={ eleContext } hasPadding={ true }>
            <div>
              <IconPanelScreen isActive={false} srcImg={ iconwhitenoti } contextToolTip={"Thông báo"}></IconPanelScreen>
            </div>
          </ModalScreen> */}
        </div>
    );

}

export default DetailPopupScreen;