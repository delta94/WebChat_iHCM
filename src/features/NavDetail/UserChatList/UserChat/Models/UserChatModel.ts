export interface IUserChat{
    id:number,
    name:string,
    avatar: string,
    timeOfLastMess: string,
    contextOfLastMess: string,
    isOnline: boolean,
    isGroup: boolean,
    hasRead: boolean,
    isActive: boolean
}
