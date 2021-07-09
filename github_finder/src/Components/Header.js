import React, { useState } from 'react';
import axios from 'axios';

const Headers = () => {
	const [input, setInput] = useState('');
	const [userValue, setUserValue] = useState([]);

	const handleInput = (e) => {
		var value = e.target.value;
		setInput(value);
	};

	const findGithubUser = () => {
		console.log(input);
		const url = `https://api.github.com/users/${input}`;
		axios
			.get(url)
			.then((res) => {
				// console.log(res);
				setUserValue(res);
				console.log('User Detail');
				console.log(userValue);
			})
			.catch((e) => console.log(e));
	};
	return (
		<div className='header'>
			<form>
				<input type='text' id='username' className='inputUser' placeholder='Enter User Name' required onChange={handleInput} />
				<button type='button' onClick={findGithubUser}>
					Find
				</button>
			</form>
			<div className='sort'>
				<label htmlFor='sort' className='sortLabel'>
					Sort By :
				</label>
				<select name='sort' className='sortBy'>
					<option selected>Choose</option>
					<option value='name'>Name</option>
					<option value='location'>Location</option>
					<option value='followers'>Followers</option>
				</select>
			</div>
		</div>
	);
};
export default Headers;
