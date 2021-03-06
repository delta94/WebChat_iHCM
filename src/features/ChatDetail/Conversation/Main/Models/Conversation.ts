import { IUser } from "../../ChatList/Main/Models/ChatList";
import { IMessage } from "../../ChatList/Main/Models/ChatList";

export interface IResponseMess {
    kindOfMess: number,
    context: string,
    
}

export interface IConversation{
    id: number,
    userList: IUser[],
    messageList: IMessage[]
}

export interface IConversationz{
    id: number,
    userList: IUser[],
    messageList: IMessage[],
    nameHeader: string,
    avatar: string,
    isOnline: boolean,
    isGroup: boolean,
    hasSearch:boolean,
    onSearch:any,
    eleOptionHeader: React.ReactElement
}