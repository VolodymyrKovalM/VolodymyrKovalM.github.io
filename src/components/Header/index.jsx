import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

const Header = ({ name, position }) => {
	return (
		<header id='home' className='header'>
			<div className='header-top'>
				<div className='some-logo'>&lt;/&gt;</div>
				<nav className='main-nav'>
					<ul>
						<li className='main-nav-item'>
							<a href="#home" className='main-nav-link'>Home</a>
						</li>
						<li className='main-nav-item'>
							<a href="#about" className='main-nav-link'>About</a>
						</li>
						<li className='main-nav-item'>
							<a href="#skills" className='main-nav-link'>Skills</a>
						</li>
						<li className='main-nav-item'>
							<a href="#contact" className='main-nav-link'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<h1 className='name-title'>{name}</h1>
			<h2 className='position-title'>{position}</h2>
		</header>
	);
}

Header.propTypes = propTypes;

export default Header;