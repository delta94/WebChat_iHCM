export interface IImageChat{
    context: string,
    datetime: string,
    isCurrent: boolean,
}

export const getListLinkImages  = (context: string) :string[]=>{
    let result:string[] = context.split(";").filter(ele => ele);
    return result;
}