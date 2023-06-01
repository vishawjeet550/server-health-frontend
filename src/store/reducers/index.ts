import { combineReducers } from 'redux';
import configuration from './configuration';
import global from './global'

const rootReducer = combineReducers({
    system: configuration,
    global
});

export default rootReducer;
