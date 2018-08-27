import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducers';
import ChatReducer from './reducers/ChatReducers';

const Reducers = combineReducers({
	auth:AuthReducer,
	chat:ChatReducer
});

export default Reducers;