import { combineReducers } from 'redux';

import userEmailReducer from './userEmailReducer';
import popupReducer from './popupReducer';

export default combineReducers({
    email: userEmailReducer,
    popup: popupReducer
});