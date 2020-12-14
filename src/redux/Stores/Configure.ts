import { combineReducers } from 'redux';
import currentUserReducer from '../Reducers/CurrentUser.reducer';
import responseMessReducer from '../Reducers/ResponseMess.reducer';

const rootReducer = combineReducers({

    responseMess: responseMessReducer,
    currentUser: currentUserReducer,

});

export default rootReducer;