export const FETCH_PARTNER = 'FETCH_PARTNER';
export const SAVE_PARTNER = 'SAVE_PARTNER';

export const fetchPartner = () => ({
    type: FETCH_PARTNER,
});

export const savePartner = (partner) => ({
    type: SAVE_PARTNER,
    partner: partner,
});