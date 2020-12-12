import { ACTIVE_RESPONSETEXT , UNACTIVE_RESPONSETEXT } from '../Types/ResponseText.type';

interface IResponseText{
    isActive:boolean,
    name:string,
    context:string,
    kindOfMess:number
}

const INITIAL_STATE: IResponseText = {
    isActive:false,
    name:'',
    context:'',
    kindOfMess:0,
};

const responseTextReducer = (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case ACTIVE_RESPONSETEXT:
            return {
                ...state,
                isActive:true,
                name:action.payload.name,
                context:action.payload.context,
                kindOfMess:action.payload.kindOfMess,
            };
        case UNACTIVE_RESPONSETEXT:
            return {
                ...state,
                isActive:false
            };

        default: 
            return state;

    }

};

export default responseTextReducer;