import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
function App() {
	return (
		<div className="container">
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
