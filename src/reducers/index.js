import { combineReducers } from 'redux';

import userEmailReducer from './userEmailReducer';
import showPopupReducer from './showPopupReducer';

export default combineReducers({
    email: userEmailReducer,
    popup: showPopupReducer
});