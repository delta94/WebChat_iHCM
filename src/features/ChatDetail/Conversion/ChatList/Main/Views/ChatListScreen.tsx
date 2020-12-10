import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CurrentChatScreen from '../../CurrentChat/Views/CurrentChatScreen';
import GuestChatScreen from '../../GuestChat/Views/GuestChatScreen';
import { IMessage, IUser } from '../Models/ChatList';
import LoadingSpinnerScreen from '../../../../../../libraries/Features/LoadingSpinner/Views/LoadingSpinnerScreen';
import './ChatListScreen.css';
import { ENUM_KIND_OF_MESSAGE } from '../../../../../../libraries/Constants/KindOfMessage';
import FileChatScreen from '../../ContextChat/FileChat/Views/FileChatScreen';
import TextChatScreen from '../../ContextChat/TextChat/Views/TextChatScreen';


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
    },[isLoading])
    
    const showAllMessages = useCallback(() :any =>{
        return listMessage.map((message:IMessage, index:number) =>{
            const userTemp: IUser = findUserById(message.userid);
            const isCurrent: boolean = userTemp.id === userid;

            let eleChildren: JSX.Element = <div></div>;

            switch (message.kindOfMess) {
                case ENUM_KIND_OF_MESSAGE.TEXT:
                    eleChildren = (
                        <TextChatScreen
                        isCurrent={ isCurrent }
                        context={ message.context }
                        datetime={ message.datetime }
                        ></TextChatScreen>
                    )

                    break;
                case ENUM_KIND_OF_MESSAGE.FILE:
                    eleChildren = (
                        <FileChatScreen
                        isFile={ true }
                        isCurrent={ isCurrent }
                        context={ message.context }
                        datetime={ message.datetime }
                        ></FileChatScreen>

                    )

                    break;
                case ENUM_KIND_OF_MESSAGE.IMAGE:


                    break;
                case ENUM_KIND_OF_MESSAGE.LINK:
                    eleChildren = (
                        <FileChatScreen
                        isFile={ false }
                        isCurrent={ isCurrent }
                        context={ message.context }
                        datetime={ message.datetime }
                        ></FileChatScreen>
                    )
                    break;
            
                default:
                    return <div></div>
                    break;
            }

            if(isCurrent){
                return <CurrentChatScreen>
                    { eleChildren }
                </CurrentChatScreen>
            } else{
                return <GuestChatScreen
                user={ userTemp } 
                >
                    { eleChildren }
                </GuestChatScreen>
            }
        })
    },[listMessage , userid]);

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