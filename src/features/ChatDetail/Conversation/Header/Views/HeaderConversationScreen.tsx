import React from 'react';
import { useHistory } from 'react-router-dom';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import './HeaderConversationScreen.css';

function HeaderConversationScreen(props: any){

    const history = useHistory();

    const redirectToDetail = () =>{
        if(props.isGroup){
            history.push("/group/detail/" + props.id)
        }else{
            history.push("/personal/detail/" + props.id)
        }
    }

    return (
        <div className="headerconversation-container">
            <div className="headerconversation-left">
                <CircleAvatarScreen
                hasCursor={ true }
                onClick={ redirectToDetail }
                isOnline={ props.isOnline }
                src={ props.avatar }
                width="48px"
                height="48px"
                class=""
                alt=""
                ></CircleAvatarScreen>
                <div className="headerconversation-context">
                    <h4 className="app-mainfont">{ props.name }</h4>
                    <span>{ props.isOnline ? "Đang online" : "Đang offline" }</span>
                </div>
            </div>
            <div className="headerconversation-right">
                {/* <TooltipScreen context="Gọi video">
                    <div>
                        <IconImageScreen src={ iconcamera } alt="camera"></IconImageScreen>
                    </div>
                </TooltipScreen>
                <TooltipScreen context="Tìm kiếm">
                    <div>
                        <IconImageScreen src={ iconsearch } alt="search"></IconImageScreen>
                    </div>
                </TooltipScreen>
                <MainPopupScreen context={ <DetailPopupScreen listEles={ listEles }></DetailPopupScreen> }>
                    <div>
                        <TooltipScreen context="Chức năng khác">
                            <div>
                                <IconImageScreen src={ iconvertical3dots } alt="3 dots"></IconImageScreen>
                            </div>
                        </TooltipScreen>
                    </div>
                </MainPopupScreen> */}
                {
                    props.eleOptionHeader
                }
            </div>
        </div>
    )
}

export default HeaderConversationScreen;