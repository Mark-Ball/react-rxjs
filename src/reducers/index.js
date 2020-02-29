import { combineReducers } from 'redux';

import userEmailReducer from './userEmailReducer';

export default combineReducers({
    email: userEmailReducer 
});