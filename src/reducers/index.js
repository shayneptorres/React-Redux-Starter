import {combineReducers} from "redux";

import PlayerReducer from "./player_reducer";

const rootReducer = combineReducers({
    base_state: PlayerReducer,
})

export default rootReducer;