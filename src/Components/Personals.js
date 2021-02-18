import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Personals = () => {
	const onToggleHidden = () => {
		// props.setHidden(!props.isHidden);
		document.querySelector('.personals').classList.toggle('small');
		document.querySelector('.portfolio').classList.toggle('hidden');
		document.querySelector('.toggle-projects').classList.toggle('hide');
	};

	return (
		<section className="personals">
			<p className="wb-title" onClick={onToggleHidden}>
				<code>
					<b className="wb-bold">WB </b>
				</code>
				<code className="portfolio-txt">portfolio</code>
			</p>
			<p>traveler </p>
			<p>freeride skier</p>
			<p className="web-dev" role="button" onClick={onToggleHidden}>
				<code>webDeveloper &lt;/&gt;</code>
			</p>
			<ul className="icons-main">
				<li>
					<a
						href="https://www.facebook.com/buahoot/"
						className="main-icon-link"
					>
						<FontAwesomeIcon
							icon={['fab', 'facebook']}
							className="fa-main-icon"
						/>
					</a>
				</li>
				<li>
					<a href="https://github.com/wblachut" className="main-icon-link">
						<FontAwesomeIcon
							icon={['fab', 'github']}
							className="fa-main-icon"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/wblachut-webdev/"
						className="main-icon-link"
					>
						<FontAwesomeIcon
							icon={['fab', 'linkedin']}
							className="fa-main-icon"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/buahoot/"
						className="main-icon-link"
					>
						<FontAwesomeIcon
							icon={['fab', 'instagram']}
							className="fa-main-icon"
						/>
					</a>
				</li>
			</ul>
			<div className="toggle-projects" role="button" onClick={onToggleHidden}>
				<div className="toggle-icon-wrapper">
					<svg
						className="show-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
					<svg
						className="hide-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Personals;

Personals.propTypes = {
	isHidden: PropTypes.bool,
	setHidden: PropTypes.func,
};
