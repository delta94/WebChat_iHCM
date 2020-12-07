import React from 'react';
import './ConversionScreen.css';
import HeaderConversionScreen from '../../Header/Views/HeaderConversionScreen'
import ChatListScreen from '../../ChatList/Main/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Views/ChatInputScreen';
import { IConversion } from '../../ChatList/Main/Models/ChatList';

const coversion: IConversion ={
    id:1,
    name:'Quang Huy',
    avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
    isOnline:true,
    listUser:[
        {
            id:1,
            name:'Quang Huy',
            avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
            isOnline:true
        },
        {
            id:2,
            name:'Quang Huy 123',
            avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
            isOnline:true
        },
    ],
    listMessage:[
        {
            id:1,
            userid:1,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
        {
            id:2,
            userid:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
        {
            id:3,
            userid:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
        {
            id:4,
            userid:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
        {
            id:5,
            userid:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
        {
            id:6,
            userid:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"07/12/20"
        },
    ]
}

function ConversionScreen(){
    return (
        <div className="conversion-container">
            <HeaderConversionScreen
            name={ coversion.name }
            avatar={ coversion.avatar }
            isOnline={ coversion.isOnline }
            ></HeaderConversionScreen>
            <ChatListScreen
            listUser={ coversion.listUser }
            listMessage={ coversion.listMessage }
            ></ChatListScreen>
            <ChatInputScreen></ChatInputScreen>
        </div>
    )
}

export default ConversionScreen;