import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './Components/navbar'
import Home from './pages/Home';
import Cmd from './pages/Cmd';
import About from './pages/About';


function App() {
	const [light, setTheme] = useState(true);

	return (
		<React.Fragment>
			<button className="darkmode dark-switch" onClick={(e) => {
				setTheme(!light);
				e.target.classList.toggle("dark-switch");
				e.target.textContent = light ? "Light" : "Dark";
			}}>
				Dark
        		</button>

			<div className={`main ${light ? "light" : "dark"}`}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/cmd' component={Cmd} />
					<Route exact path='/about' component={About} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;