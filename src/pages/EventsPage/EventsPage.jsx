import React from 'react';
import useFetch from '../../hooks/useFetch';
import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimation.json';
import Events from '../../components/Events/Events';
import { useNavigate } from 'react-router-dom';
import shoppingCart from '../../assets/cart.svg';
import Title from '../../components/Title/Title';
import './eventsPage.css';

function EventsPage() {
	const navigate = useNavigate();

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
			<main className="main-section">
				<section className="page page-events">
					<section className="icons-section">
						<img
							className="cart cart--right"
							src={shoppingCart}
							alt="Shopping cart"
							onClick={clickCart}
						/>
					</section>
					{/* <Header title="Events" /> */}
					<Title title="Events" />
					<label htmlFor="searchField" className="invisible-label">
						Search
					</label>
					<input
						type="text"
						className="search__container"
						name="search"
						id="searchField"
					/>
					<div className="scroll-container--events">
						{concerts && <Events concerts={concerts} />}
					</div>
				</section>
			</main>
		</>
	);
}

export default EventsPage;
