import { ACTIVE_RESPONSETEXT , UNACTIVE_RESPONSETEXT } from '../Types/ResponseText.type';


export const setResponseText = (name: string , context: string , kindOfMess: number) => {
    return {
        type: ACTIVE_RESPONSETEXT,
        payload: {
            name:name,
            context:context,
            kindOfMess:kindOfMess
        }
    };
};

export const unactiveResponseText = () => {
    return {
        type: UNACTIVE_RESPONSETEXT,
    };
};
