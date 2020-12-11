import React, { useState } from 'react';
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
            userid:2,
            kindOfMess:3,
            context:'https://www.topcv.vn/xem-cv/acc8716e9a6ad48aca4b875d3aba0a8f?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv',
            datetime:"06:30 pm"
        },
        {
            id:18,
            userid:2,
            kindOfMess:2,
            context:'https://www.google.com/search?q=children+reactjs+typescript&rlz=1C1CHBF_enVN794VN794&oq=children+reactjs+typescript&aqs=chrome..69i57.9607j0j4&sourceid=chrome&ie=UTF-8',
            datetime:"06:30 pm"
        },
        {
            id:19,
            userid:1,
            kindOfMess:1,
            context:'https://www.w3schools.com/howto/img_avatar.png;https://www.w3schools.com/howto/img_avatar2.png;https://www.w3schools.com/w3images/avatar2.png;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr830UoalFA6OmJf84E-Ivp53PVkdYZsuz_A&usqp=CAU;https://www.w3schools.com/w3images/avatar6.png',
            datetime:"06:30 pm"
        },
        {
            id:20,
            userid:2,
            kindOfMess:1,
            context:'https://www.w3schools.com/howto/img_avatar.png;https://www.w3schools.com/howto/img_avatar2.png;https://www.w3schools.com/w3images/avatar2.png;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr830UoalFA6OmJf84E-Ivp53PVkdYZsuz_A&usqp=CAU;https://www.w3schools.com/w3images/avatar6.png',
            datetime:"06:30 pm"
        },
        
    ]
}

function ConversionScreen(props: any){
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