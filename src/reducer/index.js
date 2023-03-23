import {combineReducers} from 'redux';
import auth from './reducer';

const reducers = combineReducers({auth : auth});

export default reducers;