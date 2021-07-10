import React from 'react';
const Card = ({ body }) => {
	console.log(body);
	const close = (e) => {
		console.log(e);
	};
	const userAccount = (index) => {
		console.log(index);
		window.location = body[index]['html_url'];
	};
	return (
		<div>
			{body.map((val, ind) => (
				<section className='section' key={ind}>
					<div className='close' onClick={() => close('section')}>
						<p>X</p>
					</div>
					<div className='userDetail'>
						<div className='img'>
							<img src={val['avatar_url']} alt='' className='image' />
						</div>
						<div className='data'>
							<p className='username'>{val['login']}</p>
							<p className='bio'>{val['bio']}</p>
							<p className='bio'>Location : {val['location']}</p>
							<p className='bio'>Followers : {val['followers']}</p>
							<input type='button' value='Github Account' className='clickHere' onClick={() => userAccount(ind)} />
						</div>
					</div>
				</section>
			))}
		</div>
	);
};

export default Card;
