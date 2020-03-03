import { combineReducers } from 'redux';

import userEmailReducer from './userEmailReducer';
import togglePopupReducer from './togglePopupReducer';

export default combineReducers({
    email: userEmailReducer,
    popup: togglePopupReducer
});