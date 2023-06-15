import React from 'react';
import './App.css';
import { ThemeProvider } from './store/themeContext/themeContext';
import Main from './containers/main/main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Main />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
