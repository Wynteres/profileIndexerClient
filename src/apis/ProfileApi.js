import 'isomorphic-fetch';
import {listProfiles, notifySearchError, createProfile, showProfile, notifyCreateError} from '../actions/Actions'

export default class HomeApi{
    static search(searchTerms){
        return dispatch => {
          fetch(`http://localhost:8080/api/v1/profiles?search=${searchTerms}`)
            .then(response => {
              if(response.status !== 200){
                response.json().then(response => {
                  dispatch(notifySearchError(response.errors));
                });
                throw new Error('profile creation error');
              } else {
                return response.json();
              }
            })
            .then(response => {
              if(response.profiles.length === 0){
                dispatch(notifySearchError('Nenhum perfil encontrado'));
                dispatch(listProfiles(response.profiles));
              }else {
                dispatch(notifySearchError(''));
                dispatch(listProfiles(response.profiles));
              }
              return response.profiles;
            });      
        }
      }
}

export class ProfileApi{
  
  static show(id){
    return dispatch => {      
			fetch(`http://localhost:8080/api/v1/profiles/${id}`)
			.then(response => {
				if(response.status !== 200){
					response.json().then(response => {
            dispatch(notifyCreateError(response.errors));
          });
          throw new Error('profile creation error');
        } else {
          return response.json();
        }
      })
      .then(response => {
        dispatch(notifyCreateError(''));
				dispatch(showProfile(response));
				return response.profile;
			}).catch( error => console.log(error));
      
    }
  }

  static create(name, twitterUrl){
      return dispatch => {

        const options = {
          method: "POST",
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            twitter_url: twitterUrl
          })
        };

			fetch(`http://localhost:8080/api/v1/profiles/`, options)
			.then(response => {
				if(response.status !== 201){
					response.json().then(response => {
            dispatch(notifyCreateError(response.errors));
          });
          throw new Error('profile creation error');
        } else {
          return response.json();
        }
      })
      .then(response => {
				dispatch(notifyCreateError(''));
				dispatch(createProfile(response.profile));
				return response.profile;
			}).catch( error => console.log(error));
      }
    }
}

