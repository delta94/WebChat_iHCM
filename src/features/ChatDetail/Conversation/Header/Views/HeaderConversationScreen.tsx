import React from 'react';
import { useHistory } from 'react-router-dom';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import CustomButtonScreen from '../../../../../libraries/Features/CustomButton/Views/CustomButtonScreen';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import './HeaderConversationScreen.css';

const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;

const styleCustomInput = {
    backgroundImage: `url('${iconsearch}')`,
    backgroundPosition: "14px 50%",
    padding: "12px 20px 12px 40px",
    borderRadius: "0.7rem",
    fontSize: "1rem",
  };

function HeaderConversationScreen(props: any){

    const history = useHistory();

    const { isGroup , id , hasSearch , avatar , isOnline , name , eleOptionHeader , onSearch } = props;

    const redirectToDetail = () =>{
        if(isGroup){
            history.push("/group/detail/" + id)
        }else{
            history.push("/personal/detail/" + id)
        }
    }

    return (
        <div className={ hasSearch ? "headerconversation-container headerconversation-container--hassearch" : "headerconversation-container"}>
            <div className="headerconversation-main">
                <div className="headerconversation-left step2">
                    <CircleAvatarScreen
                    hasCursor={ true }
                    onClick={ redirectToDetail }
                    isOnline={ isOnline }
                    src={ avatar }
                    width="48px"
                    height="48px"
                    class=""
                    alt=""
                    ></CircleAvatarScreen>
                    <div className="headerconversation-context">
                        <h4 className="app-mainfont">{ name }</h4>
                        <span>{ isOnline ? "Đang online" : "Đang offline" }</span>
                    </div>
                </div>
                <div className="headerconversation-right">
                    {
                        eleOptionHeader
                    }
                </div>
            </div>
            {
                hasSearch && (
                    <div className="headerconversation-search">
                        <CustomInputScreen
                            style={styleCustomInput}
                            class=""
                            placeHolder="Tìm kiếm cuộc trò chuyện"
                            isMultiline={false}
                            isTextArea={ true }
                            onChange={ (e:any) =>{ props.setQuery(e.target.value)} }
                            hasClearText={ true }
                        ></CustomInputScreen>
                        <CustomButtonScreen text="Đóng" onClick={ onSearch } class="secondary"></CustomButtonScreen>
                    </div>
                )
            }
        </div>
    )
}

export default HeaderConversationScreen;