export interface IGroupDatabase{
    id: number,
    name: string,
    avatar: string,
    userIdList: number[],
    messageIdList: number[]
}

export const user: IGroupDatabase[] = [
    {
        id:1,
        name:"Hội người yêu chim",
        avatar:'https://www.w3schools.com/w3images/avatar2.png',
        userIdList:[1,2],
        messageIdList:[8,9],
    },
]