import {UPDATE_NAME} from "../actions/player_action";
import {UPDATE_ALL_PLAYER_1,UPDATE_ALL_PLAYER_2} from "../actions/player_action";

export default function(state={},action){
    switch (action.type) {
        case UPDATE_ALL_PLAYER_1:
            return updateAllPlayer1(state,action.payload.name,action.payload.weapon)
        case UPDATE_ALL_PLAYER_2:
            return updateAllPlayer2(state,action.payload.name,action.payload.weapon)
        case UPDATE_NAME:
            return updateName(state,action.payload)
        default:
        return state
    }
}

function updateAllPlayer1(state,name,weapon){
    let newState = {...state}
    newState.players.player1.name = (name === "") ? newState.players.player1.name : name
    newState.players.player1.weapon = (weapon === "") ? newState.players.player1.weapon : weapon
    return newState
}

function updateAllPlayer2(state,name,weapon){
    let newState = {...state}
    newState.players.player2.name = (name === "") ? newState.players.player2.name : name
    newState.players.player2.weapon = (weapon === "") ? newState.players.player2.weapon : weapon
    return newState
}

function updateName(state,name){
    let newState = {...state}
    newState.players.player1.name = name
    return newState
}