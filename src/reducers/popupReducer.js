const defaultState = { showPopup: false };

const popupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return { ...state, showPopup: true };
        case 'CLOSE_POPUP':
            return { ...state, showPopup: false };
        default:
            return state;
    }
};

export default popupReducer;