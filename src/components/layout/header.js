import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Logo from '../../assets/images/logo.svg'
import LogoSmall from '../../assets/images/logo-small.png'

const LogoHome = () => {
	return(<img src={LogoSmall} className="img-fluid menu-home-logo"/>)
}
export default class Header extends Component {

  render() {
    return (
		<AppBar>
			<div className="container">
				<div className="logo-wrapper">
					<Link to={'/'}>
						<img src={Logo} className="img-fluid menu-logo" title="logo fretadão" alt="logo fretadão" />
					</Link>
					<span className="menu-title">Indexador de perfis</span>
				</div>				
			</div>
			<Navigation type='horizontal'>
				<Link to={'/profiles/new'}>Criar novo perfil</Link>
			</Navigation>
		</AppBar>
    );
  }
}