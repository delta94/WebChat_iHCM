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
import { IConversation } from '../../../Main/Models/Conversation';

const conversations: IConversation ={
    id:1,
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
    ],
    messageList:[
        {
            id:1,
            userid:1,
            kindOfMess:0,
            context:'1',
            datetime:"06:30 pm"
        },
        {
            id:2,
            userid:2,
            kindOfMess:0,
            context:'2',
            datetime:"06:30 pm"
        },
        {
            id:3,
            userid:2,
            kindOfMess:0,
            context:'3',
            datetime:"06:30 pm"
        },
        {
            id:4,
            userid:2,
            kindOfMess:0,
            context:'4',
            datetime:"06:30 pm"
        },
        {
            id:5,
            userid:2,
            kindOfMess:0,
            context:'5',
            datetime:"06:30 pm"
        },
        {
            id:6,
            userid:2,
            kindOfMess:0,
            context:'6',
            datetime:"06:30 pm"
        },
        {
            id:7,
            userid:1,
            kindOfMess:0,
            context:'7',
            datetime:"06:30 pm"
        },
        {
            id:8,
            userid:1,
            kindOfMess:0,
            context:'8',
            datetime:"06:30 pm"
        },
        {
            id:9,
            userid:2,
            kindOfMess:0,
            context:'9',
            datetime:"06:30 pm"
        },
        {
            id:10,
            userid:2,
            kindOfMess:0,
            context:'10',
            datetime:"06:30 pm"
        },
        {
            id:11,
            userid:2,
            kindOfMess:0,
            context:'11',
            datetime:"06:30 pm"
        },
        {
            id:12,
            userid:2,
            kindOfMess:0,
            context:'12',
            datetime:"06:30 pm"
        },
        {
            id:13,
            userid:2,
            kindOfMess:0,
            context:'13',
            datetime:"06:30 pm"
        },
        {
            id:14,
            userid:2,
            kindOfMess:0,
            context:'14',
            datetime:"06:30 pm"
        },
        {
            id:15,
            userid:2,
            kindOfMess:0,
            context:'15',
            datetime:"06:30 pm"
        },
        {
            id:16,
            userid:2,
            kindOfMess:0,
            context:'16',
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


function ChatListScreen(){
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

        const messageListz = conversations.messageList.slice(- pageNum * 3);
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
    
    const showAllMessages = useCallback(() :any =>{
        if(observer.current){
            observer.current.scrollTop = observer.current.scrollHeight;
        }
        return messageList.map((message: IMessage, index: number) =>{
            const userTemp: IUser = findUserById(conversations.userList,message.userid);
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
                if (index === 0) {
                    return <CurrentChatScreen key={ index } ref={ lastMessageRef }>
                        { eleChildren }
                    </CurrentChatScreen>
                }else{
                    return <CurrentChatScreen key={ index }>
                        { eleChildren }
                    </CurrentChatScreen>
                }

            } else{
                if (index === 0) {
                    return <div ref={ lastMessageRef }>
                        <GuestChatScreen
                            kindOfMess={ message.kindOfMess }
                            key={ index }
                            user={ userTemp } 
                            context={ message.context }
                        >
                            { eleChildren }
                        </GuestChatScreen>
                    </div>

                }else{
                    return <GuestChatScreen
                    kindOfMess={ message.kindOfMess }
                    key={ index }
                    user={ userTemp } 
                    context={ message.context }
                    >
                        { eleChildren }
                    </GuestChatScreen>
                }

            }
        })
    },[messageList , userid]);

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
                    </div>

                )
            }
        </div>
    )
}

export default ChatListScreen;