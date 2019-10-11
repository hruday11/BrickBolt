import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import ImagesReducer from './ImagesReducer';
import LoginReducer from './LoginReducer';


const rootReducer = combineReducers({
    form: formReducer,
    imagesRed : ImagesReducer,
    loginRed : LoginReducer
});

export default rootReducer;