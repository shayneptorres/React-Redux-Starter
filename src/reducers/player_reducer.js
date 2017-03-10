import {UPDATE_NAME} from "../actions/player_action";

export default function(state={},action){
    switch (action.type) {
        case UPDATE_NAME:
            console.log("I REDUCED:", UPDATE_NAME)    
            return updateName(state,action.payload)
        default:
        return state
    }
}

function updateName(state,name){
    let newState = {...state}
    newState.players.player1.name = name
    return newState
}