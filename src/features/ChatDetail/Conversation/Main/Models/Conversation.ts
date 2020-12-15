export interface IResponseMess {
    kindOfMess: number,
    context: string,
    
}

import { IUser } from "../../ChatList/Main/Models/ChatList";
import { IMessage } from "../../ChatList/Main/Models/ChatList";


export interface IConversation{
    id: number,
    listUser: IUser[],
    listMessage: IMessage[]
}