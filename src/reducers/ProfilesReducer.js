import createHistory from 'history/createHashHistory'
const history = createHistory();

export function profilesReducer(state={profiles: Array(), profile: {}},action){
    if(action.type === 'LIST_PROFILES'){
        return {profiles: action.response};
    }
    if(action.type === 'CREATE_PROFILE'){
        history.push('/profiles');
        return {...state, profile: action.response.profile};
    }
    
    if(action.type === 'SHOW_PROFILE'){
        return {...state, profile: action.response.profile};
    }
    return state;
}