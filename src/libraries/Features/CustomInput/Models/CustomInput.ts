export interface  ICustomInput{
    placeHolder: string,
    class: string,
    isTextArea:boolean,
    style:{
        backgroundImage?: string,
        backgroundPosition?: string,
        padding: string,
        borderRadius: string,
        fontSize: string,
    },
    setIsMultiline?: any
    isMultiline: boolean
}