import { SHOW_CONVERSION } from './../Types/Conversion.type';

interface IResponseMess{
    isActive:boolean,
    name:string,
    context:string,
    kindOfMess:number
}

const INITIAL_STATE: IResponseMess = {
    isActive:false,
    name:'',
    context:'',
    kindOfMess:0,
};

const conversionReducer = (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case SHOW_CONVERSION:
            return {
                ...state,
                isActive:true,
                name:action.payload.name,
                context:action.payload.context,
                kindOfMess:action.payload.kindOfMess,
            };

        default: 
            return state;
    }
};

export default conversionReducer;