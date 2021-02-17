/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/portfolio.css';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			myRepos: [],
		};
	}

	getStyle() {
		// eslint-disable-next-line react/prop-types
		this.props.isHidden
			? {
					display: 'flex',
					flex: '3',
			  }
			: {
					display: 'none',
					flex: '0',
			  };
		// this.props.isHidden ? this.styleHidden : this.styleShown;
	}

	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/wblachut/repos');
		const repoData = await data.json();
		console.log(repoData);
		const repositories = repoData
			.sort((a, b) => (a.id > b.id ? 1 : -1))
			.slice(1, 13)
			.reverse();
		this.setState({ myRepos: repositories });
	}

	render() {
		return (
			<div className="portfolio hidden" styles={this.getStyle()}>
				<div className="portfolio-wrapper">
					{this.state.myRepos.map((repo) => {
						return (
							<div className="repo-container" key={repo.id}>
								<div className="repo-img-div">
									<img
										src={
											process.env.PUBLIC_URL + `/images/${repo.name}_img.png`
										}
										alt="repo-image"
										className="repo-image"
									/>
									<a href={repo.html_url} className="gh-link">
										<FontAwesomeIcon
											icon={['fab', 'github']}
											className="gh-icon"
										/>
									</a>
									<a href={`${repo.homepage}`} className="demo-link">
										<FontAwesomeIcon
											icon={['fas', 'link']}
											className="link-icon"
										/>
									</a>
									<div className="repo-gif-div">
										<img
											src={
												process.env.PUBLIC_URL + `/images/${repo.name}_gif.gif`
											}
											alt="repo-gif"
											className="repo-gif"
										/>
										<div className="repo-name">{repo.description}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{/* <div className="icons-skills-wrapper"> */}
				<ul className="icon-skills">
					<li>
						<FontAwesomeIcon
							icon={['fab', 'js-square']}
							className="skill-icon"
						/>{' '}
						<p>javascript</p>
					</li>
					<li>
						<FontAwesomeIcon icon={['fab', 'react']} className="skill-icon" />{' '}
						<p>React</p>
					</li>
					<li>
						<FontAwesomeIcon icon={['fab', 'html5']} className="skill-icon" />{' '}
						<p>HTML5</p>
					</li>
					<li>
						<FontAwesomeIcon icon={['fab', 'css3']} className="skill-icon" />{' '}
						<p>CSS3</p>
					</li>
					<li>
						<img
							alt="White Visual Studio Code 2019 icon"
							src="https://img.icons8.com/nolan/2x/ffffff/visual-studio-code-2019.png"
						></img>
						<p>VS Code</p>
					</li>
				</ul>
				{/* </div> */}
			</div>
		);
	}
}

export default Portfolio;
