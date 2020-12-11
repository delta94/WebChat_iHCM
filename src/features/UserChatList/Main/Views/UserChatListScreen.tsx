import React from 'react';
import HeaderScreen from '../../Header/Views/HeaderScreen';
import UserChatScreen from '../../UserChat/Views/UserChatScreen';
import './UserChatListScreen.css';
import { IUserChat } from '../../UserChat/Models/UserChatModel';
import NoUserChatFound from '../../NoUserChatFound/Views/NoUserChatFound';
import CustomInputScreen from '../../../../libraries/Features/CustomInput/Views/CustomInputScreen';

const listUserChat: IUserChat[] =[
  {
    id:1,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy dz",
    timeOfLastMess:"09:00",
    contextOfLastMess:"fas gf gd fgdfgdfgdf",
    isGroup:true,
    isOnline:true,
    hasRead:false,
    isActive: true
  },
  {
    id:2,
    avatar: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy dz",
    timeOfLastMess:"09:00",
    contextOfLastMess:"fas gf gd fgdfgdfgdf",
    isGroup:true,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:3,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy dz",
    timeOfLastMess:"09:00",
    contextOfLastMess:"fas gf gd fgdfgdfgdf",
    isGroup:true,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:4,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"fas gf gd fgdfgdfgdf",
    isGroup:false,
    isOnline:false,
    hasRead:false,
    isActive: false
  },
  {
    id:5,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"fas gf gd fgdfgdfgdf",
    isGroup:false,
    isOnline:false,
    hasRead:false,
    isActive: false
  },
  {
    id:6,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:7,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:8,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:9,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:10,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:11,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:12,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:13,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:14,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:15,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:16,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:17,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:18,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:19,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:20,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:21,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  },
  {
    id:22,
    avatar:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
    name: "Huy Quang",
    timeOfLastMess:"09:00",
    contextOfLastMess:"Huy đẹp zai thì chắc chắn rồi na nân agagdsg g dfg",
    isGroup:false,
    isOnline:true,
    hasRead:false,
    isActive: false
  }
]

const iconsearch = require('../../../../libraries/Icons/iconsearch.svg').default;

const styleCustomInput = {
  backgroundImage:`url('${ iconsearch }')`,
  backgroundPosition:'3% 50%',
  padding:'12px 20px 12px 40px',
  borderRadius:'0.7rem',
  fontSize:'1rem',
}

function UserChatListScreen() {

  const showUserChat = (listUserChat: any[]) =>{
    if(listUserChat.length === 0){
      return <NoUserChatFound></NoUserChatFound>
    }
    return listUserChat.map((userChat:IUserChat , idx:number) =><UserChatScreen
      key={idx}
      id={userChat.id}
      isActive={userChat.isActive}
      isGroup={userChat.isGroup}
      isOnline={userChat.isGroup}
      name={userChat.name}
      contextOfLastMess={userChat.contextOfLastMess}
      hasRead={userChat.hasRead}
      timeOfLastMess={userChat.timeOfLastMess}
      avatar={userChat.avatar}
    ></UserChatScreen>)
  }

  return (
    <div className="userchatlist-container">
      <div className="userchatlist-top">
        <HeaderScreen></HeaderScreen>
        <CustomInputScreen style={ styleCustomInput } class="searchinput-container" placeHolder="Tìm kiếm cuộc trò chuyện"></CustomInputScreen>
      </div>
      <div className="userchatlist-bottom">
        {
          showUserChat(listUserChat)
        }
      </div>

    </div>
  );
}

export default UserChatListScreen;
