import React from 'react';
import './ConversionScreen.css';
import HeaderConversionScreen from '../../Header/Views/HeaderConversionScreen'
import ChatListScreen from '../../ChatList/Main/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Views/ChatInputScreen';
import { IConversion } from '../../ChatList/Main/Models/ChatList';

const coversion: IConversion ={
    id:1,
    name:'Trung Đức',
    avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
    isOnline:true,
    listUser:[
        {
            id:1,
            name:'Trung Đức',
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
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:2,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:3,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:4,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:5,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:6,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:7,
            userid:1,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:8,
            userid:1,
            kindOfMess:0,
            context:'Bootstrap is a free and ',
            datetime:"06:30 pm"
        },
        {
            id:9,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:10,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:11,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:12,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:13,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:14,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:15,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:16,
            userid:2,
            kindOfMess:0,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
        },
        {
            id:17,
            userid:1,
            kindOfMess:2,
            context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            datetime:"06:30 pm"
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