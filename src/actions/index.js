// action creator to save a user's email into store
export const setUserEmail = (email = '') => (
    {
        type: 'USER_EMAIL',
        payload: email 
    }
);