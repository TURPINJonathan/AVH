export const FETCH_ACTUALITY = 'FETCH_ACTUALITY';
export const SAVE_ACTUALITY = 'SAVE_ACTUALITY';

export const fetchActuality = () => ({
    type: FETCH_ACTUALITY,
});

export const saveActuality = (actuality) => ({
    type: SAVE_ACTUALITY,
    actuality: actuality,
});