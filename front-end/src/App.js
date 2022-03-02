import React, { useReducer } from 'react';
import './App.css';

// *** NEXT STEPS ***

// 1. Load data from database.
//    See text book:
//    https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Libraries/React/RoadToReact/hacker-stories02

// 2. Create a submit form

// 3. Have the front end and back end speak to each other.
//    Specifically, have the submit form "push" to the back end.

// 4. Create a delete button component.
//    See "handleRemoveStory" from https://github.com/JamieBort/LearningDirectory/tree/master/JavaScript/Libraries/React/RoadToReact/hacker-stories02

// 5. Create an edit button component.

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const storiesReducer = (state, action) => {
	switch (action.type) {
		case 'STORIES_FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case 'STORIES_FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case 'STORIES_FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case 'REMOVE_STORY':
			return {
				...state,
				data: state.data.filter((story) => action.payload.objectID !== story.objectID),
			};
		default:
			throw new Error();
	}
};

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

function App() {
	console.log(API_ENDPOINT);

	// const [ searchTerm, setSearchTerm ] = useSemiPersistentState('search', 'React');
	const searchTerm = 'search';

	const [ stories, dispatchStories ] = React.useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		// isLoading: true, // want this to remain false.
		isError: false,
		// isError: true, // want this to remain false.
	});

	// A
	const handleFetchStories = React.useCallback(
		() => {
			// B
			if (!searchTerm) return;

			dispatchStories({ type: 'STORIES_FETCH_INIT' });

			fetch(`${API_ENDPOINT}${searchTerm}`)
				.then((response) => response.json())
				.then((result) => {
					dispatchStories({
						type: 'STORIES_FETCH_SUCCESS',
						payload: result.hits,
					});
				})
				.catch(() => dispatchStories({ type: 'STORIES_FETCH_FAILURE' }));
		},
		[ searchTerm ],
	); // E

	React.useEffect(
		() => {
			handleFetchStories(); // C
		},
		[ handleFetchStories ],
	); // D

	console.log('list:', stories.data);
	return (
		<div className="App">
			<h1>Task Manager</h1>
			<SubmitForm />
			{stories.isError && <p>Something went wrong ...</p>}
			{stories.isLoading ? <p>Loading ...</p> : <PlaceHolderList />}
			{/* {stories.isLoading ? <p>Loading ...</p> : <List list={stories.data} />} */}
			{/* <List /> */}
		</div>
	);
}

// *** COMPONENTS ***

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

function PlaceHolderList() {
	return <p>PlaceHolderList</p>;
}

function Item() {
	return <p>One item.</p>;
}

export default App;
