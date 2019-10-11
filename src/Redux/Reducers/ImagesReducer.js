import { GET_IMAGES, GET_IMAGES_SUCCESS, GET_IMAGES_ERROR } from "../Actions/ImagesActions";

var initialState = {
    imagesArray : [],
    loading:true
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_IMAGES:
        return {...state, loading: true}
        case GET_IMAGES_SUCCESS:
        return { ...state, imagesArray: action.payload, loading : false}
        case GET_IMAGES_ERROR:
        return action;
        default:
        return state;
    }
}