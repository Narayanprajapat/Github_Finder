import React from 'react';
const Card = (data) => {
	console.log(data['name']);
	console.log(data['name']['location']);
	const close = (e) => {
		console.log(e);
	};
	return (
		<div>
			<section className='section'>
				<div className='close' onClick={() => close('section')}>
					<p>X</p>
				</div>
				<div className='img'>
					<img src={data['name']['imageUrl']} alt='' className='image' />
				</div>
				<div className='data'>
					<p className='username'>{data['name']['username']}</p>
					<p className='bio'>Location : {data['name']['location']}</p>
					<p className='bio'>Followers : {data['name']['followers']}</p>
				</div>
			</section>
		</div>
	);
};

export default Card;
