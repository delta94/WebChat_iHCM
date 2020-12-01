import React from 'react';
import HeaderScreen from '../../Header/Views/HeaderScreen';
import SearchInputScreen from '../../SearchInput/Views/SearchInputScreen';
import UserChatScreen from '../../UserChat/Views/UserChatScreen';
import './UserChatListScreen.css';
import { UserChatModel } from '../../UserChat/Models/UserChatModel';

const listUserChat: UserChatModel[] =[
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
]

function UserChatListScreen() {
  return (
    <div className="userchatlist-container">
      <HeaderScreen></HeaderScreen>
      <SearchInputScreen></SearchInputScreen>
      {
        listUserChat.map((userChat:UserChatModel , idx:number) =><UserChatScreen
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
      {/* <UserChatScreen 
        id={1}
        isGroup={true}
        isOnline={true}
        name={"Huy dz"}
        contextOfLastMess={"fdfsdfsdfdsfdsf"}
        hasRead={false}
        timeOfLastMess={"09:00"}
        avatar={"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
      ></UserChatScreen> */}
    </div>
  );
}

export default UserChatListScreen;
