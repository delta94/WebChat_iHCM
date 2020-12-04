import React from 'react';
import CircleAvatarScreen from '../../../../../libraries/CircleAvatar/Views/CircleAvatarScreen';
import './HeaderConversionScreen.css';

function HeaderConversionScreen(){
    return (
        <div className="conversion-header">
            <CircleAvatarScreen
            isOnline={true}
            src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            width="50px"
            height="50px"
            class=""
            alt=""
            ></CircleAvatarScreen>
        </div>
    )
}

export default HeaderConversionScreen;