
export function notificationReducer(state={},action){
    if(action.type === 'EMPTY_SEARCH'){
        return {...state, errors: action.response.errors};
    }
    
    if(action.type === 'CREATE_ERROR'){
        return {...state, name: action.response.name, twitter_url: action.response.twitter_url};
    }    
    return state;
    
}

