export const FETCH_ACTUALITY = 'FETCH_ACTUALITY';
export const SAVE_ACTUALITY = 'SAVE_ACTUALITY';

export const fetchActuality = () => {
    return {
        type: FETCH_ACTUALITY,
    };
};

export const saveActuality = (actuality) => {
    return {
        type: SAVE_ACTUALITY,
        payload: actuality,
    };
};
