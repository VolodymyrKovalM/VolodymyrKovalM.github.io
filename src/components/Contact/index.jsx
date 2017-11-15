import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
    	contacts: PropTypes.object.isRequired,
	};

	handleSubmit(event) {
		event.preventDefault();

		let enteredInfo = {
			name: this.nameInput.value,
			email: this.emailInput.value,
			messageInput: this.messageInput.value
		}

		console.log(enteredInfo);
	}

	handleChange(event) {
		console.log(event.target.value);
	}

	render() {
		const { phone, email, viber } = this.props.contacts;

		return (
			<section id='contact' className='section section-last'>
				<h3 className='section-title'>Contact</h3>
				<div className='contact-content'>
					<div className='contact-info'>
						<div>
							<div className='c-info-title'>Phone number:</div>
							<a href={`tel:${phone.link}`}>{phone.text}</a>
						</div>
						<div>
							<div className='c-info-title'>Email:</div>
							<a href={`ailto:${email}`}>{email}</a>
						</div>
						<div>
							<div className='c-info-title'>Viber:</div>
							<a href={`viber://add?number=${viber.link}`}>{viber.text}</a>
						</div>				
					</div>
					<form 
						className='contact-form' 
						action='#' 
						method='POST'
						onSubmit={this.handleSubmit}
					>
						<input 
							type='text' 
							name='name' 
							placeholder='Name'
							ref={(input) => { this.nameInput = input; }}
							onChange={this.handleChange}
						/>
						<input 
							type='email' 
							name='email' 
							placeholder='Email'
							ref={(input) => { this.emailInput = input; }}
							onChange={this.handleChange}
						/>
						<textarea 
							name='message' 
							placeholder='Send a message'
							ref={(input) => { this.messageInput = input; }}
							onChange={this.handleChange}
						></textarea>
						<button type='submit'>Send</button> 
					</form>
				</div>
			</section>
		);
	}
}

export default Contact;