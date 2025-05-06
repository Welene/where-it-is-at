import React from 'react';
import Header from '../../components/Header/Header';

import useFetch from '../../hooks/useFetch';

import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimation.json';
import Events from '../../components/Events/Events';

import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';

import './eventsPage.css';

function EventsPage() {
	const navigate = useNavigate();

	const clickReturn = () => {
		navigate('/'); // function that navigates back to HomePage
	};

	const clickCart = () => {
		navigate('/cart'); // function that navigates to cart page
	};

	const {
		data: concerts,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/events.json');

	if (isLoading) {
		return (
			<section className="loading-section">
				<Lottie
					animationData={animationData}
					loop
					autoplay
					style={{ width: 300, height: 300 }}
				/>
			</section>
		);
	}

	if (isError)
		return (
			<section className="page">
				<p>
					{' '}
					Helene did not definitely not do a good enough job with this
					part of the code apparently{' '}
				</p>{' '}
			</section>
		);

	return (
		<>
			<section className="icons-section">
				<img
					className="return"
					src={leftArrow}
					alt="Navigate back arrow"
					onClick={clickReturn}
				/>
				<img
					className="cart"
					src={shoppingCart}
					alt="Shopping cart"
					onClick={clickCart}
				/>
			</section>
			<section className="page page-events">
				<Header title="Events" />
				<main className="main-section">
					<input type="text" className="main-section__search" />
					{concerts && <Events concerts={concerts} />}
				</main>
			</section>
		</>
	);
}

export default EventsPage;
