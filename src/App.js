import './styles/App.css';
import React, { useState } from 'react';
import Portfolio from './Components/Portfolio';
import Personals from './Components/Personals';

function App() {
	const [isHidden, setHidden] = useState(true);
	return (
		<div className="App">
			<Personals isHidden={isHidden} setHidden={setHidden} />
			<Portfolio isHidden={isHidden} />
		</div>
	);
}

export default App;
