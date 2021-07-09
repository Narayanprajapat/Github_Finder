import React from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Header from './Components/Header';
import './style.css';
const App = () => {
	const url = 'https://api.github.com/users';
	axios
		.get(url)
		.then((res) => console.log(res))
		.catch((e) => console.log(e));
	const obj = { username: 'Narayan Prajapat', location: 'Kannod M.P.', followers: '20', imageUrl: 'https://avatars.githubusercontent.com/u/65602178?v=4' };
	return (
		<div>
			<p className='head'>Github Finder</p>
			<hr />
			<Header />
			<Card name={obj} />
		</div>
	);
};

export default App;
