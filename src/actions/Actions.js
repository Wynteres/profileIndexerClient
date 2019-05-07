export function listProfiles(response){
    return {type:'LIST_PROFILES', response};
}

export function createProfile(response){
    return {type:'CREATE_PROFILE', response};
}

export function showProfile(response){
    return {type:'SHOW_PROFILE', response};
}

export function notifySearchError(response){
    return {type:'EMPTY_SEARCH', response};
}

export function notifyCreateError(response){
    return {type:'CREATE_ERROR', response};
}