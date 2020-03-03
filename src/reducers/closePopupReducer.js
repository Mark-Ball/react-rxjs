const defaultState = { showPopup: false };

const closePopupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CLOSE_POPUP':
            return { ...state, showPopup: false };
        default:
            return state;
    }
};

export default closePopupReducer;