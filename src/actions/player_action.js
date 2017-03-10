export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ALL_PLAYER_1 = "UPDATE_ALL_PLAYER_1";
export const UPDATE_ALL_PLAYER_2 = "UPDATE_ALL_PLAYER_2";

export function updatePlayer1Name(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updatePlayer1Info(name, weapon){
    return {
        type: UPDATE_ALL_PLAYER_1,
        payload: {name,weapon}
    }
}

export function updatePlayer2Info(name, weapon){
    return {
        type: UPDATE_ALL_PLAYER_2,
        payload: {name,weapon}
    }
}