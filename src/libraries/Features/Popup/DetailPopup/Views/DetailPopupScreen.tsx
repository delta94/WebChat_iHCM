import React from 'react';
import { ENUM_KIND_OF_MESSAGE } from '../../../../Constants/KindOfMessage';
import IconImageScreen from '../../../IconImage/Views/IconImageScreen';
import './DetailPopupScreen.css';

function DetailPopupScreen(props : any){
    const { listEles , eleHeader } = props;
    const showDetailPopup = () =>{
        return listEles.map((ele:any , index:number) =>{
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
        </div>
    );

}

export default DetailPopupScreen;