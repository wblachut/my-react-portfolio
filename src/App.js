import './styles/App.css';
import React from 'react';
import Portfolio from './Components/Portfolio';
import Personals from './Components/Personals';

function App() {
	return (
		<div className="App">
			<Personals />
			<Portfolio />
		</div>
	);
}

export default App;
