import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { store } from './Store/Store';
import { Provider } from 'react-redux';

import Main from './Components/main';
import Custom from './Components/custom';
import LandingPage from './Components/landingPage';
import Personal from './Components/personal';
import Chatbot from './Components/util/chatbot';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} /> <Route path="/custom/:room" element={<Custom />} />{' '}
					<Route path="/chatbot" element={<Chatbot />} />
					<Route path="/custom/:room" element={<Custom />} />{' '}
					<Route path="/personal/:room" element={<Personal />} />{' '}
					{/* <Route path="/custom" element={<Custom />} />{' '} */}
					{/* <Route exact path="/custom/india" element={<Custom />} /> {' '} */}
				</Routes>{' '}
			</div>{' '}
		</Provider>
	);
}

export default App;
