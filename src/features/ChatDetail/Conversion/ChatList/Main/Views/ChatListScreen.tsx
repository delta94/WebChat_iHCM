import React, { useEffect, useRef, useState } from 'react';
import CurrentChatScreen from '../../CurrentChat/Views/CurrentChatScreen';
import GuessChatScreen from '../../GuessChat/Views/GuessChatScreen';
import { IMessage, IUser } from '../Models/ChatList';
import LoadingSpinnerScreen from '../../../../../../libraries/Features/LoadingSpinner/Views/LoadingSpinnerScreen';
import './ChatListScreen.css';

function ChatListScreen(props : any){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userid, setUserid] = useState<number>();
    const { listUser , listMessage } = props;
    
    const chatlistRef = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        setTimeout(() => {
            setUserid(2);
            setIsLoading(false);
        }, 2e3);

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
                isLoading ? (
                    <div className="chatlist-loader">
                        <LoadingSpinnerScreen></LoadingSpinnerScreen>
                    </div>
                ) : (
                    showAllMessages()
                )
            }

        </div>
    )
}

export default ChatListScreen;