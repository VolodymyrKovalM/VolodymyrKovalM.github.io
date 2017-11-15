import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
  contacts: PropTypes.object.isRequired
};

const Footer = ({ contacts }) => {
	const { phone, email, viber } = contacts;

	return (
		<footer className='footer'>
			<div className='footer-contacts'>
				<div className='f-contacts-item'>
					<span>Mobile:</span>
					<a href={`tel:${phone.link}`}>{phone.text}</a>
				</div>
				<div className='f-contacts-item'>
					<span>Email:</span>
					<a href={`ailto:${email}`}>{email}</a>
				</div>
				<div className='f-contacts-item'>
					<span>Viber:</span>
					<a href={`viber://add?number=${viber.link}`}>{viber.text}</a>
				</div>
			</div>
			<div className='footer-logo'>&lt;/&gt;</div>
		</footer>
	);
}

Footer.propTypes = propTypes;

export default Footer;