import logo from './logo.svg';
import './App.css';

const MY_TOKEN = process.env.REACT_APP_TOKEN;
const MY_SECRET = process.env.REACT_APP_SECRET;

function App() {
	console.log(MY_TOKEN);
	console.log(MY_SECRET);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
