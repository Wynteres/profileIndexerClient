import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';
import BackIcon from '@material-ui/icons/ArrowBackOutlined';
import {ProfileApi} from '../../apis/ProfileApi'

class ShowProfileBox extends Component {

    constructor(props){
        super(props);
        this.id = this.props.match.params.id;
        this.props.show(this.id);
    }
    
    componentDidMount(){
        this.id = this.props.match.params.id;
        this.props.show(this.id);
    }

	render() {
		return (
			<div className="show-profile-body">
				<div className="show-profile-box container mt-3">
					<h1>Vendo perfil de...</h1>
                    <div className="float-right">
                    <Link to={'/'}><Button icon={<BackIcon/>} label="VOLTAR" primary /></Link>
                    </div>
					<hr/>
					<div className='row'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className="col-12 profile-view-field-label">
                                    <span>Nome:</span>
                                </div>
                                <div className="col-12 profile-view-field-value">
                                <span>{this.props.profile? this.props.profile.name : ''}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 profile-view-field-label">
                                    <span>Usuário do twitter:</span>
                                </div>
                                <div className="col-12 profile-view-field-value">
                                    <span>{this.props.profile ? this.props.profile.twitter_username : ''}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 profile-view-field-label">
                                    <span>Link:</span>
                                </div>
                                <div className="col-12 profile-view-field-value">
                                    <span>{this.props.profile? this.props.profile.twitter_url : ''}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            {this.props.profile ? this.props.profile.twitter_description : ''}
                        </div>
                    </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return state.profilesReducer
  };
  
const mapDispatchToProps = dispatch => {
return {
    show : (id) => {
        dispatch(ProfileApi.show(id));
    }

}
}

const ShowProfileBoxContainer = connect(mapStateToProps,mapDispatchToProps)(ShowProfileBox);
  
export default ShowProfileBoxContainer