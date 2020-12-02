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




export interface IUser{
    id:number,
    name:string,
    avatar: string,
    isOnline: boolean,
    //...
}

export interface IMessage{
    id: number,
    user: IUser,
    context: string,
    datetime: string,
}

export interface IConversion{
    id: number,
    name: string,
    avatar: string,
    listUser: IUser[],
    listMessage: IMessage[]
}

export interface IGroup{
    id:number,
    name:string,
    avatar: string,
    isOnline: boolean,
    listUser: IUser[],
    listConversion: IConversion[]
}