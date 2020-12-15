export interface IConversationDatabase{
    id: number,
    listUserId: number[],
    listMessageId: number[]
}

export const user: IConversationDatabase[] = [
    {
        id:1,
        listUserId:[1,2],
        listMessageId:[1,2,3,4,5,6,7]
    }
]