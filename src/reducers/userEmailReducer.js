const userEmailReducer = (state, action) => {
    switch (action.type) {
        case 'USER_EMAIL':
            return { ...state, action.payload };
        default: 
            return { ...state };
    };
};

export default userEmailReducer;