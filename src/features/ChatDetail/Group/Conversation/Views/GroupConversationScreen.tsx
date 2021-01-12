import React from 'react';
import { useHistory } from 'react-router-dom';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import DetailPopupScreen from '../../../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';
import MainPopupScreen from '../../../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import TooltipScreen from '../../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import { IConversationz } from '../../../Conversation/Main/Models/Conversation';
import ConversationScreen from '../../../Conversation/Main/Views/ConversationScreen';
// import "./GroupConversationScreen.css";

const iconoffvolume = require('../../../../../libraries/Icons/iconoffvolume.svg').default;
const iconvertical3dots = require('../../../../../libraries/Icons/iconvertical3dots.svg').default;
const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;
const icontrash = require('../../../../../libraries/Icons/icontrash.svg').default;
const iconsignoutgroup = require('../../../../../libraries/Icons/iconsignoutgroup.svg').default;
const iconintroduction = require('../../../../../libraries/Icons/iconintroduction.svg').default;


function GroupConversationScreen(props : any) {

    const history = useHistory();

    const redirectToGroupDetail = () =>{
        history.push("/group/detail/" + conversationz.id)
    }

    const listEles = [
        {
            onClick: null,
            icon: iconsearch,
            text: "Tìm kiếm"
        },
        {
            onClick: null,
            icon: iconoffvolume,
            text: "Tắt thông báo"
        },
        {
            onClick: redirectToGroupDetail,
            icon: iconintroduction,
            text: "Giới thiệu"
        },
        {
            onClick: null,
            icon: iconsignoutgroup,
            text: "Thoát khỏi nhóm"
        },
        {
            onClick: null,
            icon: icontrash,
            text: "Xóa chat"
        }
    ];

    const eleOptionHeader = (
        <>
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
            </MainPopupScreen>
        </>
    );

    const conversationz: IConversationz = {
        id:2,
        nameHeader:"Nhóm hyperlogy",
        avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
        isOnline:true,
        isGroup:true,
        eleOptionHeader: eleOptionHeader,
        userList:[
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
            {
                id:3,
                name:'Quang Huy 123',
                avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
                isOnline:true
            },
            {
                id:4,
                name:'Quang Huy 123',
                avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
                isOnline:true
            },
            {
                id:5,
                name:'Quang Huy 123',
                avatar:"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
                isOnline:true
            },
        ],
        messageList:[
            {
                id:1,
                userid:1,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[2],
            },
            {
                id:2,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:3,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:4,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:5,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:6,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:7,
                userid:1,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[2],
            },
            {
                id:8,
                userid:1,
                kindOfMess:0,
                context:'Bootstrap is a free and ',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[2],
            },
            {
                id:9,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],
            },
            {
                id:10,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],       
            },
            {
                id:11,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],         
            },
            {
                id:12,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],        
            },
            {
                id:13,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],           
            },
            {
                id:14,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],        
            },
            {
                id:15,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],          
            },
            {
                id:16,
                userid:2,
                kindOfMess:0,
                context:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],           
            },
            {
                id:17,
                userid:2,
                kindOfMess:3,
                context:'https://www.topcv.vn/xem-cv/acc8716e9a6ad48aca4b875d3aba0a8f?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],        
            },
            {
                id:18,
                userid:2,
                kindOfMess:2,
                context:'https://www.google.com/search?q=children+reactjs+typescript&rlz=1C1CHBF_enVN794VN794&oq=children+reactjs+typescript&aqs=chrome..69i57.9607j0j4&sourceid=chrome&ie=UTF-8',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],          
            },
            {
                id:19,
                userid:1,
                kindOfMess:1,
                context:'https://www.w3schools.com/howto/img_avatar.png;https://www.w3schools.com/howto/img_avatar2.png;https://www.w3schools.com/w3images/avatar2.png;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr830UoalFA6OmJf84E-Ivp53PVkdYZsuz_A&usqp=CAU;https://www.w3schools.com/w3images/avatar6.png',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[2],           
            },
            {
                id:20,
                userid:2,
                kindOfMess:1,
                context:'https://www.w3schools.com/howto/img_avatar.png;https://www.w3schools.com/howto/img_avatar2.png;https://www.w3schools.com/w3images/avatar2.png;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr830UoalFA6OmJf84E-Ivp53PVkdYZsuz_A&usqp=CAU;https://www.w3schools.com/w3images/avatar6.png',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],         
            },
            {
                id:21,
                userid:2,
                kindOfMess:2,
                context:'https://www.google.com/search?q=children+reactjs+typescript&rlz=1C1CHBF_enVN794VN794&oq=children+reactjs+typescript&aqs=chrome..69i57.9607j0j4&sourceid=chrome&ie=UTF-8',
                datetime:"06:30 pm",
                isGroupNoti:false,
                groupNoti:{
                    username:"",
                    imgSrc:"",
                    status:-1,
                },
                useridHaveRead:[1],          
            },     
            {
                id:22,
                userid:-1,
                kindOfMess:-1,
                context:'',
                datetime:"06:30 pm",
                isGroupNoti:true,
                groupNoti:{
                    username:"Ngọc Ánh",
                    imgSrc:"https://www.w3schools.com/howto/img_avatar.png",
                    status:1,
                },
                useridHaveRead:[1,2],           
            },      
            {
                id:23,
                userid:-1,
                kindOfMess:-1,
                context:'',
                datetime:"06:30 pm",
                isGroupNoti:true,
                groupNoti:{
                    username:"Ngọc Ánh",
                    imgSrc:"https://www.w3schools.com/howto/img_avatar.png",
                    status:2,
                },
                useridHaveRead:[1,2],           
            },      
            {
                id:24,
                userid:-1,
                kindOfMess:-1,
                context:'',
                datetime:"06:30 pm",
                isGroupNoti:true,
                groupNoti:{
                    username:"Ngọc Ánh",
                    imgSrc:"https://www.w3schools.com/howto/img_avatar.png",
                    status:3,
                },
                useridHaveRead:[1,2,3,4,5],          
            },      
        ]
    }

    return (
        <ConversationScreen { ...conversationz }></ConversationScreen>
    );
}

export default GroupConversationScreen;



