import { IResponseText } from './../../../Main/Models/Conversion';
import { IUser } from "../../Main/Models/ChatList";

export interface IGuessChat{
    user: IUser,
    kindOfMess: number,
    context: string,
    children: React.ReactNode,
    responseText: IResponseText,
    setResponseText:any
}