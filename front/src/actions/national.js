export const FETCH_NATIONAL = 'FETCH_NATIONAL';
export const SAVE_NATIONAL = 'SAVE_NATIONAL';

export const fetchNational = () => ({
    type: FETCH_NATIONAL,
});

export const saveNational = (national) => ({
    type: SAVE_NATIONAL,
    national: national,
});