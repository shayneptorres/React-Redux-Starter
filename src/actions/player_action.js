export const UPDATE_NAME = "UPDATE_NAME";

export function updatePlayerName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}