import { LOGGED_IN, LOGGED_OUT } from "../Actions/LoginActions";

var initialState = {
    userLoggedIn:false
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGGED_IN:
        return {...state, userLoggedIn: action.payload}
        case LOGGED_OUT:
        return { ...state, userLoggedIn : action.payload}
        default:
        return state;
    }
}