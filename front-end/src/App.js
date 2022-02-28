// import logo from './logo.svg';
import './App.css';

// const MY_TOKEN = process.env.REACT_APP_TOKEN;
// const MY_SECRET = process.env.REACT_APP_SECRET;

// Next steps
// load data from database. see text book.
// Create a submit form
// have the front end and back end speak to each other. Specifically, have the submit form "push" to the back end.
// create a delete button component
// create an edit button component

const dummyData = {
	tasks: [
		{
			completed: false,
			_id: '62192060415bc2079d193e97',
			name: 'Second task',
			__v: 0,
		},
		{
			completed: false,
			_id: '621923588012e20acb2974c4',
			name: 'Third task',
			__v: 0,
		},
		{
			completed: false,
			_id: '6219236c8012e20acb2974c6',
			name: 'Fourth task',
			__v: 0,
		},
		{
			completed: true,
			_id: '621952420aedb80f96827af6',
			name: 'Fixed it!!!',
			__v: 0,
		},
		{
			completed: false,
			_id: '62197e824821a91763e35f27',
			name: 'First task',
			__v: 0,
		},
		{
			completed: false,
			_id: '621ae44f26ff2e30386637bd',
			name: 'Again',
			__v: 0,
		},
	],
};

function SubmitForm() {
	return (
		<div>
			<h2>Submit form</h2>
		</div>
	);
}

function List() {
	// console.log(dummyData.tasks);
	// console.log(dummyData.tasks[0]);

	const listItems = dummyData.tasks.map((item) => (
		<li key={item._id}>
			<p>Name: {item.name}</p>
			<ul>
				<p>ID: {item._id}</p>
			</ul>
			<p>button to edit</p>
			<p>toggle button to delete item</p>
		</li>
	));

	return (
		<div>
			<h2>My List</h2>
			{/* loop through the array */}
			{/* then create a component for each array item and pass each item to that component.*/}
			<ul>{listItems}</ul>
		</div>
	);
}

function Item() {
	return <p>One item.</p>;
}

function App() {
	// console.log(MY_TOKEN);
	// console.log(MY_SECRET);

	return (
		<div className="App">
			<h1>Task Manager</h1>
			<SubmitForm />
			<List />
		</div>
	);
}

export default App;
