import { IResponseMess } from '../../../Main/Models/Conversation';
import { IUser } from "../../Main/Models/ChatList";

export interface IGuessChat{
    id:number,
    user: IUser,
    kindOfMess: number,
    context: string,
    children: React.ReactNode,
    responseMess: IResponseMess,
    setResponseMess:any
}