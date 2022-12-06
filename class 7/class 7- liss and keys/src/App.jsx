import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import UserCard from './components/UserCard';

function App() {
	const [users, setUsers] = useState([]);

	const [inputText, setInputText] = useState('');

	useEffect(() => {
		const URL = `https://randomuser.me/api/?results=${inputText}`;
		axios
			.get(URL)
			.then(res => setUsers(res.data.results))
			.catch(err => console.log(err));
	}, [inputText]);

	const handleOnchange = e => {
		setInputText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setInputText(e.target.numberUser.value);
	};

	return (
		<div className='App'>
			{/* Input no controlado */}
			<h1>Uncontrolled input</h1>
			<form onSubmit={handleSubmit}>
				<input id='numberUser' type='text' />
				<button>SUBMIT</button>
			</form>
			{/* Input controlado */}
			<h1>Controlled input</h1>
			<input
				value={inputText}
				onChange={handleOnchange}
				type='text'
				className='input-text'
			/>
			<h1>Lisy keys xd</h1>
			<h2>{`This is the text of the input: ${inputText}`}</h2>
			{users?.map(user => {
				return <UserCard user={user} key={user.login.uuid} />;
			})}
		</div>
	);
}

export default App;
