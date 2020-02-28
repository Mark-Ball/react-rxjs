const defaultState = { userEmail: '' };

const userEmailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_EMAIL':
            return { ...state, userEmail: action.payload };
        default: 
            return state;
    };
};

export default userEmailReducer;