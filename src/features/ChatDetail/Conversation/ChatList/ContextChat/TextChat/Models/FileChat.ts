import { IUser } from '../../../Main/Models/ChatList';
// import { IUserChat } from '../../../../../../UserChatList/UserChat/Models/UserChatModel';
export interface IFileChat{
    isFile:boolean,
    isCurrent:boolean
    user:IUser,
    context:string
    datetime:string
}