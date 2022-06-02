export const FETCH_MISSION = 'FETCH_MISSION';
export const SAVE_MISSION = 'SAVE_MISSION';

export const fetchMission = () => ({
    type: FETCH_MISSION,
});

export const saveMission = (mission) => ({
    type: SAVE_MISSION,
    mission: mission,
});