import React, { useEffect, useState } from 'react';
import CircleAvatarScreen from '../../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import { findQueryInMessage } from '../Models/MessageFound';
import './MessageFoundScreen.css';

function MessageFoundScreen(props : any){
    const [messageList , setMessageList] = useState<string[]>([]);

    const query = "báo cáo";
    const messages = "Em báo cáo công việc:\n-Họp cùng team mobile mô tả luồng và chi tiết các tính năng app cha..\n- Họp cùng team mobile mô tả luồng và chi tiết các tính năng app cha..\nNgày:em làm code";

    useEffect(() =>{
        let temp = messages.split("\n");
        setMessageList(temp);
    },[])

    return (
        <div className="messagefound-container">
            <CircleAvatarScreen
            src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
            alt=""
            width="60px"
            height="60px"
            class=""
            isOnline={ false }
            ></CircleAvatarScreen>
            <div className="messagefound-right">
                <h4>Chi Chi</h4>
                {
                    messageList.map((message:string) =>{
                        let result = findQueryInMessage(query, message);
                        console.log(result);
                        return <p>
                            { message }
                        </p>
                    })
                }
            </div>
        </div>
    )
}

export default MessageFoundScreen;