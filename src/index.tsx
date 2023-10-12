import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Test } from './pages/Test/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			after header, before main
			<main>
				before router
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
					<Route path="/test/:id" component={Test} />
				</Router>
				after router
			</main>
			after main
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
