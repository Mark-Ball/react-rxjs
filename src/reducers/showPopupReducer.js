const defaultState = { showPopup: false };

const showPopupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return { ...state, showPopup: true };
        default:
            return state;
    }
};

export default showPopupReducer;