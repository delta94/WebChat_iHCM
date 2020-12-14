export interface IGroup{
    id: number,
    name: string,
    avatar: string,
    listUserId: number[],
    listMessageId: number[]
}

export const user: IGroup[] = [
    {
        id:1,
        name:"Hội người yêu chim",
        avatar:'https://www.w3schools.com/w3images/avatar2.png',
        listUserId:[1,2],
        listMessageId:[8,9],
    },
]