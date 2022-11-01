import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { store } from './Store/Store';
import { Provider } from 'react-redux';

import Main from './Components/main';
import Custom from './Components/custom';
import LandingPage from './Components/landingPage';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route exact path="/custom/:room" component={Custom} />{' '}
					<Route exact path="/main" element={<Main />} /> {' '}
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
