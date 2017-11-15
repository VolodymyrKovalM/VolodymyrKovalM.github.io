import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  goals: PropTypes.string.isRequired,
  dreams: PropTypes.string.isRequired,
  altForImg: PropTypes.string.isRequired
};

const About = ({ avatarSrc, goals, dreams, altForImg }) => {
	return (
		<section id='about' className='section'>
			<h3 className='section-title'>About</h3>
			<div className='about-content'>
				<div className='ab-cont-block block-left'>
					<div className='cont-bl-title'>Goals</div>
					<p>{goals}</p>
				</div>
				<img className='avatar' src={avatarSrc} alt={altForImg}/>
				<div className='ab-cont-block block-right'>
					<div className='cont-bl-title'>Dreams</div>
					<p>{dreams}</p>
				</div>
			</div>
		</section>
	);
}

About.propTypes = propTypes;

export default About;