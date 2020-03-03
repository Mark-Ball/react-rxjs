const defaultState = { showPopup: false };

const togglePopupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return { ...state, showPopup: !state.showPopup };
        default:
            return state;
    }
};

export default togglePopupReducer;