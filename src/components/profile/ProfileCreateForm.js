import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input/Input';
import {connect} from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';
import {ProfileApi} from '../../apis/ProfileApi';
import CheckIcon from '@material-ui/icons/CheckOutlined';

export class ProfileCreateForm extends Component {
    constructor(props){
		super(props);
        this.state = {name: '', twitterUrl:''};
    }
	
	create(event){
		event.preventDefault();
		this.props.store.dispatch(ProfileApi.create(this.state.name, this.state.twitterUrl));
	}

	handleChange = (name, value) => {
		this.setState({...this.state, [name]: value});
    };

	render() {
		return (
            <form className="row" onSubmit={this.create.bind(this)}>

                <div className="col-md-6">
                    <Input className="home-search-input" type='text' label='Nome:'
                        value={this.state.name} 
                        onChange={this.handleChange.bind(this, 'name')}
                        error={this.props.errors.name}
                    />
                </div>

                <div className="col-md-6">
                    <Input className="home-search-input" type='text' label='URL do twitter:'
                        value={this.state.twitterUrl}
                        onChange={this.handleChange.bind(this, 'twitterUrl')}
                        error={this.props.errors.twitter_url}
                    />
                </div>

                <div className="home-search-submit col-12 text-center">
                    <Button type='submit' label='indexar!' icon={<CheckIcon/>} raised primary />
                </div>
            </form>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        errors : state.notificationReducer
    }
}
const ProfileCreateFormContainer = connect(mapStateToProps)(ProfileCreateForm)

export default ProfileCreateFormContainer