import { IUser } from "./User.model";
import { IMessage } from "./Message.model";

export interface IConversion{
    id: number,
    listUser: IUser[],
    listMessage: IMessage[]
}