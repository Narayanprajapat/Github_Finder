import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Headers = () => {
	const [input, setInput] = useState('');
	const [userValue, setUserValue] = useState([]);
	const [sort, setSort] = useState();
	const handleInput = (e) => {
		var value = e.target.value;
		setInput(value);
	};

	const chooseSortBy = (e) => {
		var value = e.target.value;
		if (value === 'name') {
			value = 'login';
		}
		console.log(value);
		// console.log(userValue);
		var resp = userValue.sort((a, b) => b['login'] - a['login']);
		console.log(resp);
		// setSort(resp);
	};

	const url = `https://api.github.com/users`;
	axios
		.get(url)
		.then((res) => {
			setUserValue([res.data]);
		})
		.catch((e) => console.log(e));
	const findGithubUser = () => {
		console.log(input);
		const url = `https://api.github.com/users/${input}`;
		axios
			.get(url)
			.then((res) => {
				console.log(res);
				setUserValue([res.data]);
			})
			.catch((e) => console.log(e));
	};
	return (
		<div className='header'>
			<form>
				<input type='text' id='username' className='inputUser' placeholder='Enter User Name' required onChange={handleInput} />
				<button type='button' onClick={() => findGithubUser}>
					Find
				</button>
			</form>
			<div className='sort'>
				<label htmlFor='sort' className='sortLabel'>
					Sort By :
				</label>
				<select name='sort' className='sortBy' onChange={chooseSortBy}>
					<option selected>Choose</option>
					<option value='name'>Name</option>
					<option value='location'>Location</option>
					<option value='followers'>Followers</option>
				</select>
			</div>
			{/* {userValue.length !== 0 ? <Card body={userValue} /> : ''} */}
			{/* <Card body={sort} /> */}
		</div>
	);
};
export default Headers;
