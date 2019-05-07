import React, { Component } from 'react';
import ProfilesList from './ProfilesList';
import ProfileSearch from './ProfileSearch';

export default class SearchProfilesBox extends Component {
	  
	render() {
		return (
			<div className="home-body">
				<div className="home-search-box row">
					<ProfileSearch {...this.props}/>
				</div>
				<div className="home-search-result0-box container">
					<ProfilesList {...this.props}/>
				</div>
			</div>
		);
	}
}

