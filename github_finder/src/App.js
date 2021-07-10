import React, { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Header from './Components/Header';
import './style.css';
const App = () => {
	const [allUser, setAllUser] = useState([]);
	const url = 'https://api.github.com/users';
	axios
		.get(url)
		.then((res) => {
			setAllUser(res['data']);
		})
		.catch((e) => console.log(e));

	return (
		<div>
			<p className='head'>Github Finder</p>
			<hr />
			<Header />
			{/* <Card body={allUser} /> */}
		</div>
	);
};

export default App;
