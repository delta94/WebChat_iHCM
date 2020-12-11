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
    kindOfMess:number, // 0: text , 1 : image , 2: file , 3: link
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


export const findUserById  = (listUser: IUser[] ,userid: number) :IUser  =>{ 
    let user =  listUser.find((user:IUser) =>user.id === userid);
    if(user === undefined){
        user={
            id:0,
            name:'huy',
            avatar:'',
            isOnline:false
        }
    }
    return user;
};
