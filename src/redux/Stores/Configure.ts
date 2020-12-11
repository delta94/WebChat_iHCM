import { combineReducers } from 'redux';

import responseTextReducer from '../Reducers/ResponseText.reducer';

const rootReducer = combineReducers({

    responseText: responseTextReducer,

});

export default rootReducer;