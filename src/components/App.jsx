import React from 'react';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Preloader from './Preloader';

import './styles.scss';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoaded: false
		};
	}

	componentWillMount() {
		fetch('/data/data.json').then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({
				data: data,
				isLoaded: true
			});
		});
	}

	render() {

		if(!this.state.isLoaded) {
			return <Preloader />;
		}

		let { data } = this.state;
		
		return (
			<div>
				<Header 
					name={data.name}
					position={data.position}
				/>
				<About 
					avatarSrc={data.avatarSrc}
					altForImg={data.name}
					goals={data.goals}
					dreams={data.dreams}
				/>
				<Skills 
					skills={data.skills}
				/>
				<Contact 
					contacts={data.contacts}
				/>
				<Footer 
					contacts={data.contacts}
				/>
			</div>
		);
	}
}

export default App;