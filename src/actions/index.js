// action creator to save a user's email into store
export const setUserEmail = (email = '') => (
    {
        type: 'USER_EMAIL',
        payload: email 
    }
);

// action creator to set showPopup in the store to true
// could this be toggle popup?
export const togglePopup = () => (
    {
        type: 'TOGGLE_POPUP'
    }
);