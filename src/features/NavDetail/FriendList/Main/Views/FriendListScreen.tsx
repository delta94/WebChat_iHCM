import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../../../libraries/Constants/KindOfNotFoundIcon';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import DataNotFoundScreen from '../../../../../libraries/Features/DataNotFound/Views/DataNotFoundScreen';
import { IFriend } from '../../Friend/Models/Friend';
import FriendScreen from '../../Friend/Views/FriendScreen';

import './FriendListScreen.css';


const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;

const styleCustomInput = {
  backgroundImage: `url('${iconsearch}')`,
  backgroundPosition: "3% 50%",
  padding: "12px 20px 12px 40px",
  borderRadius: "0.7rem",
  fontSize: "1rem",
};


const friendList: IFriend[] = [
    {
        id:1,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:2,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:3,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:4,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:5,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:6,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:7,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:8,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:9,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:10,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 123",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:11,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 345",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:12,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 777",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:13,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:14,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:15,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:16,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:17,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:18,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:19,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 123",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:20,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 333",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:21,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 789",
        isOnline:true,
        context:"iSoft"
    },
    {
        id:22,
        avatar:"https://www.w3schools.com/w3images/avatar2.png",
        name:"Quang Huy 111",
        isOnline:true,
        context:"iSoft"
    },
];

function timeout(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getFriends = async (page: number) =>{

    let result:any[] = [];
    
    let length = friendList.length;
    if(page * 10 < length){
        length = page * 10
    }
    for (let index = (page - 1)* 10; index < length; index++) {
        await result.push(friendList[index]);
    }
    await timeout(1e3);
    return result;
}

function FriendListScreen(props: any) {
    const [query , setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [friends, setFriends] = useState<IFriend[]>([]);
    const typingTimeoutRef = useRef<any>(null);

    useEffect(() => {
        const loadUsers = async () => {
          const newFriends = await getFriends(page);
          setFriends((prev) => [...prev, ...newFriends]);
        };
    
        loadUsers();
    }, [page]);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(typingTimeoutRef.current){
          clearTimeout(typingTimeoutRef.current);
        }
    
        typingTimeoutRef.current = setTimeout(() =>{
          setQuery(e.target.value);
        },5e2);
    }

    const handleScroll = (event: any) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop <= (clientHeight + 2)) {
          setPage(prev => prev + 1);
        }
      };

    const showFriendList = () =>{
        if (friends.length === 0) {
            return <DataNotFoundScreen text={"Không tìm thấy kết quả"} icon={ ENUM_KIND_OF_NOTFOUNDICON.DATA } isPosition={ true }></DataNotFoundScreen>;
          }
          return friends.map(
            (friend: IFriend, idx: number) => (
                <FriendScreen
                key={ idx }
                {...friend}
                ></FriendScreen>
            )
          );
    }

    return (
        <>
            <div className="userchatlist-top">
                <div className="userchatlist-header-container">
                    <h4 className="app-mainfont">Thành viên</h4>          
                </div>

                <CustomInputScreen
                style={styleCustomInput}
                class="searchinput-container"
                placeHolder="Nhập thành viên cần tìm kiếm"
                isMultiline={false}
                isTextArea={ true }
                onChange={ onChange }
                hasClearText={ true }
                ></CustomInputScreen>
            </div>

            <div className="userchatlist-bottom" onScroll={ handleScroll }>
                {
                    showFriendList()
                }
            </div>
        </>
    );

}

export default FriendListScreen;


