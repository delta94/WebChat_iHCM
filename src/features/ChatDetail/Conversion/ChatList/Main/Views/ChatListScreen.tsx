import React, { useEffect, useRef, useState } from 'react';
import CurrentChatScreen from '../../CurrentChat/Views/CurrentChatScreen';
import GuessChatScreen from '../../GuessChat/Views/GuessChatScreen';
import { IMessage, IUser } from '../Models/ChatList';
import './ChatListScreen.css';

function ChatListScreen(props : any){
    const [userid, setUserid] = useState<number>();
    const { listUser , listMessage } = props;
    
    const chatlistRef = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        setUserid(2);
    })

    const findUserById  = (userid: number) :IUser =>{ 
        return listUser.find((user:IUser) =>user.id === userid) 
    };

    useEffect(() =>{
        if(chatlistRef.current){
            chatlistRef.current.scrollTop = chatlistRef.current.scrollHeight;
        }
    })

    const showAllMessages = () :any =>{
        return listMessage.map((message:IMessage, index:number) =>{
            const userTemp = findUserById(message.userid);
            if(userTemp.id === userid){
                return <CurrentChatScreen 
                key={ index }
                user={ userTemp } 
                context={ message.context }
                datetime={ message.datetime }
                ></CurrentChatScreen>;
            }
            return <GuessChatScreen 
            key={ index }
            user={ userTemp } 
            context={ message.context }
            datetime={ message.datetime }
            ></GuessChatScreen>;
        })
    }

    return (
        <div className="chatlist-container" ref={ chatlistRef }>
            {
                showAllMessages()
            }
        </div>
    )
}

export default ChatListScreen;