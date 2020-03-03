export const setUserEmail = (email = '') => (
    {
        type: 'USER_EMAIL',
        payload: email 
    }
);

export const showPopup = () => (
    {
        type: 'SHOW_POPUP'
    }
);

export const closePopup = () => (
    {
        type: 'CLOSE_POPUP'
    }
);