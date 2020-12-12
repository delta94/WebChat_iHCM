import React, { useCallback, useEffect , useRef, useState } from 'react';
import CurrentChatScreen from '../../CurrentChat/Views/CurrentChatScreen';
import GuestChatScreen from '../../GuestChat/Views/GuestChatScreen';
import { findUserById, IMessage, IUser } from '../Models/ChatList';
import LoadingSpinnerScreen from '../../../../../../libraries/Features/LoadingSpinner/Views/LoadingSpinnerScreen';
import './ChatListScreen.css';
import { ENUM_KIND_OF_MESSAGE } from '../../../../../../libraries/Constants/KindOfMessage';
import FileChatScreen from '../../ContextChat/FileChat/Views/FileChatScreen';
import TextChatScreen from '../../ContextChat/TextChat/Views/TextChatScreen';
import ImageChatScreen from '../../ContextChat/ImageChat/Views/ImageChatScreen';


function ChatListScreen(props : any){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userid, setUserid] = useState<number>(1);
    const { listUser , listMessage } = props;
    
    const chatlistRef = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        setTimeout(() => {
            setIsLoading(false);

        }, 1e3);

    })


    useEffect(() =>{
        if(chatlistRef.current){
            chatlistRef.current.scrollTop = chatlistRef.current.scrollHeight;
        }
    },[isLoading])
    
    const showAllMessages = useCallback(() :any =>{
        
        return listMessage.map((message: IMessage, index: number) =>{
            const userTemp: IUser = findUserById(listUser,message.userid);
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
                    eleChildren = (
                        <ImageChatScreen
                        isCurrent={ isCurrent }
                        context={ message.context }
                        datetime={ message.datetime }
                        ></ImageChatScreen>
                    )

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
                    return <div></div>;
                    break;
            }

            if(isCurrent){
                return <CurrentChatScreen key={ index }>
                    { eleChildren }
                </CurrentChatScreen>
            } else{
                return <GuestChatScreen
                kindOfMess={ message.kindOfMess }
                key={ index }
                user={ userTemp } 
                context={ message.context }
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