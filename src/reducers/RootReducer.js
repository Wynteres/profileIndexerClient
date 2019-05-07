import { combineReducers} from 'redux';
import {profilesReducer} from './ProfilesReducer';
import {notificationReducer} from './NotificationReducer';

const rootReducer = combineReducers({profilesReducer, notificationReducer});

export default rootReducer
