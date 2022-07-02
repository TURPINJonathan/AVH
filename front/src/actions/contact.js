export const CONTACT = 'CONTACT';
export const SHOW_FLASH = 'SHOW_FLASH';

export const contact = (newvalue, identifier) => ({
    type: CONTACT,
    newvalue,
    identifier,
});

export const showFlash = (newvalue) => ({
    type: SHOW_FLASH,
    newvalue,
});