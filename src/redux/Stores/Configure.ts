import { combineReducers } from 'redux';

import responseTextReducer from '../Reducers/States/ResponseText.reducer';

const rootReducer = combineReducers({

    responseText: responseTextReducer,

});

export default rootReducer;