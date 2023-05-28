import { combineReducers } from 'redux';
import configuration from './configuration';

const rootReducer = combineReducers({
    system: configuration
});

export default rootReducer;
