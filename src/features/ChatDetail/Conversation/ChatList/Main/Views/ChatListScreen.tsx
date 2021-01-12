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
import GroupNotiChatScreen from '../../ContextChat/GroupNotiChat/Views/GroupNotiChatScreen';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';

function ChatListScreen(props: any){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userid, setUserid] = useState<number>(1);
    
    const chatlistRef = useRef<HTMLInputElement>(null);
    const [pageNum , setPageNum] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [messageList, setMessageList] = useState<IMessage[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setLoading(true);
        setError(false);

        const messageListz = props.messageList.slice(- pageNum * 10);
        setMessageList(messageListz)
        setHasMore(messageListz.length > 0)
        setLoading(false)
        setIsLoading(false)
      }, [pageNum])

    const observer = useRef<any>();
    const lastMessageRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNum(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore]);

    useEffect(() =>{
        if(chatlistRef.current  && pageNum <= 2){
            chatlistRef.current.scrollTop = chatlistRef.current.scrollHeight;
        }
    })
    
    const showAllMessages = () =>{
        if(observer.current){
            observer.current.scrollTop = observer.current.scrollHeight;
        }
        return messageList.map((message: IMessage, index: number) =>{
            if(message.isGroupNoti){
                return <GroupNotiChatScreen 
                status={ message.groupNoti.status } 
                imgSrc={ message.groupNoti.imgSrc }
                username={ message.groupNoti.username }
                ></GroupNotiChatScreen>
            } else{
                const userTemp: IUser = findUserById(props.userList,message.userid);
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
                }
    
                if(isCurrent){
                    return <CurrentChatScreen key={ index } ref={ index === 0 ? lastMessageRef : null }>
                        { eleChildren }
                    </CurrentChatScreen>
    
                } else{
                    return <div ref={ index === 0 ? lastMessageRef : null } key={ index }>
                        <GuestChatScreen
                            id={ props.id }
                            kindOfMess={ message.kindOfMess }
                            user={ userTemp } 
                            context={ message.context }
                        >
                            { eleChildren }
                        </GuestChatScreen>
                    </div>
    
                }
            }
        })
    };

    const showUsersHaveRead = () =>{
        const useridHaveReadList = messageList[messageList.length - 1].useridHaveRead;
        return <div className="chatlist-usersviewed">
                    {
                        useridHaveReadList.map((userid:number , index:number) =>{
                            if(index < 3){
                                const userTemp: IUser = findUserById(props.userList,userid);
                                return <CircleAvatarScreen
                                    width=""
                                    height=""
                                    src={ userTemp.avatar }
                                    alt={ "" }
                                    class="chatlist-userhasread"
                                    isOnline={ false }
                                    onClick={ null }
                                ></CircleAvatarScreen>
                            }
                            return <></>;
                        })
                    }
                    {
                        useridHaveReadList.length > 3 && (
                            <div className="chatlist-userhasread chatlist-moreusershaveread app-mainfont">
                                <span>
                                    +
                                    { useridHaveReadList.length - 3 }
                                </span>
                            </div>
                        )
                    }
                </div>
    }

    return (
        <div className="chatlist-container" ref={ chatlistRef }>
            {
                isLoading ? (
                    <div className="chatlist-loader">
                        <LoadingSpinnerScreen></LoadingSpinnerScreen>
                    </div>
                ) : (
                    <div>
                        {
                            loading && <h3>Loading ...</h3>
                        }
                        {
                            showAllMessages()
                        }
                        {
                            showUsersHaveRead()
                        }
                    </div>

                )
            }
        </div>
    )
}

export default ChatListScreen;
