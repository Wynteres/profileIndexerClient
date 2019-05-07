import React, { Component } from 'react';
import ProfileCreateForm from './ProfileCreateForm';

export default class CreateProfileBox extends Component {
	  
	render() {
		return (
			<div className="create-profile-body">
				<div className="create-profile-box container mt-3">
					<h1>Criar novo perfil</h1>
					<hr/>
					<ProfileCreateForm {...this.props}/>
				</div>
			</div>
		);
	}
}

