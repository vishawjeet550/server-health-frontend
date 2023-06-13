import { combineReducers } from 'redux';
import configuration from './configuration';
import global from './global'
import shell from './shell'

const rootReducer = combineReducers({
    system: configuration,
    global,
    shell
});

export default rootReducer;
