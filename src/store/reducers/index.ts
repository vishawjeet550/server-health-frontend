import { combineReducers } from 'redux';
import configeration from './configeration';

const rootReducer = combineReducers({
    system: configeration
});

export default rootReducer;
