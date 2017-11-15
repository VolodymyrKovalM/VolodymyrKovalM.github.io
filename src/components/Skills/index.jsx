import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Skills = ({ skills }) => {
	let maxScore = 10;
	return (
		<section id='skills' className='section'>
			<h3 className='section-title'>Skills</h3>
			{skills.map((skill) => {
				let level = skill.level;
				let skillUnits = [];

				for(let i = 0; i < maxScore; i++) {
					skillUnits.push(
						<span 
							key={i} 
							className={level > i ? 'skill-level-unit active' : 'skill-level-unit'}
						></span>
					); 
				}
				return (
					<div key={skill.name} className='skill'>
						<div className='skill-name'>{skill.name}</div>
						<div className='skill-level'>
							{skillUnits}
						</div>
					</div>
				);
			})}
		</section>
	);
}

Skills.propTypes = propTypes;

export default Skills;