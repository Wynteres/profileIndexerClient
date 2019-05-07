import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import HomeApi from '../../apis/ProfileApi';

class ProfileSearch extends Component{    
	constructor(props){
		super(props);
		this.state = {searchTerms: '', searchError: ''};	}
	
	search(event){
		event.preventDefault();
		this.props.store.dispatch(HomeApi.search(this.state.searchTerms));
	}

	handleChange = (name, value) => {
		this.setState({...this.state, [name]: value});
    };
    
	// componentDidMount(){
	// 	this.props.store.subscribe(() => {
	// 		this.setState({searchError: this.props.store.getState().notificationReducer});
    //     });
    // }
        
    render(){
        return(
            <form className="container" onSubmit={this.search.bind(this)}>				
                <Input className="home-search-input" type='text' label='Pesquisar perfis'
                    value={this.state.searchTerms} 
                    onChange={this.handleChange.bind(this, 'searchTerms')}
                    // error={this.props.errors}
                />
                <div className="home-search-submit text-center">
                    <Button type='submit' icon={<SearchIcon/>} floating />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors : state.notificationReducer
    }
}
const ProfileSearchContainer = connect(mapStateToProps)(ProfileSearch)

export default ProfileSearchContainer