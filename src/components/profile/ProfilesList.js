import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person'
import MoreIcon from '@material-ui/icons/MoreVertOutlined'
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Menu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

class ProfilesList extends Component{
    constructor(props){
        super(props);
        this.state = {searchResults: []};
    }    
    render(){
        return(            
            <List selectable ripple='false'>
                {   
                    this.props.result.profiles.map(profile =>{
                        return(
                            <ListItem key={profile.id}
                                avatar={<PersonIcon/>}
                                caption={profile.name}
                                legend={profile.twitter_url}
                                rightIcon={
                                <Menu icon={<MoreIcon/>}>
                                    <Link to={"/profiles/"+profile.id}><MenuItem value='Ver' caption='Ver'/></Link>
                                    <MenuItem value='Editar' caption='Editar'/>
                                </Menu>}
                            />
                        )
                    })
                }
            </List>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        result : state.profilesReducer
    }
}
const ProfilesListContainer = connect(mapStateToProps)(ProfilesList)

export default ProfilesListContainer