export interface IUser{
    id:number,
    name:string,
    avatar: string,
    isOnline: boolean,
    //...
}

export interface IMessage{
    id: number,
    userid: number,
    context: string,
    datetime: string,
}

export interface IConversion{
    id: number,
    name: string,
    avatar: string,
    isOnline:boolean,
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