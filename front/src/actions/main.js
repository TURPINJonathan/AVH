// MISSIONS
export const FETCH_MISSION = 'FETCH_MISSION';
export const SAVE_MISSION = 'SAVE_MISSION';

export const fetchMission = () => ({
    type: FETCH_MISSION,
});

export const saveMission = (mission) => ({
    type: SAVE_MISSION,
    mission: mission,
});

// ACTUALITIES
export const FETCH_ACTUALITY = 'FETCH_ACTUALITY';
export const SAVE_ACTUALITY = 'SAVE_ACTUALITY';

export const fetchActuality = () => ({
    type: FETCH_ACTUALITY,
});

export const saveActuality = (actuality) => ({
    type: SAVE_ACTUALITY,
    actuality: actuality,
});
