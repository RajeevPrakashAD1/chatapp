import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './LandingPage/landingPage';
import PreOrder from './LandingPage/preorder';
import { store } from './Store/Store';
import { Provider } from 'react-redux';

import Main from './main';
import Custom from './custom';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<switch>
					<Route exact path="/custom/:room" component={Custom} />
					<Route exact path="/" component={LandingPage} /> <Route exact path="/main" component={Main} /> {' '}
				</switch>{' '}
				{' '}
			</div>{' '}
		</Provider>
	);
}

export default App;
