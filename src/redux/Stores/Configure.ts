import { combineReducers } from 'redux';

import responseMessReducer from '../Reducers/States/ResponseMess.reducer';

const rootReducer = combineReducers({

    responseMess: responseMessReducer,

});

export default rootReducer;