import React from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import Title from '../../components/Title/Title';
import DoneTicket from '../../components/DoneTicket/DoneTicket';
import './confirmationPage.css';

function ConfirmationPage() {
	const navigate = useNavigate();

	const clickReturn = () => navigate('/');
	const clickCart = () => navigate('/cart');

	return (
		<main className="main-section">
			<section className="page page-confirmation">
				<section className="icons-section">
					<img
						className="return"
						src={leftArrow}
						alt="Back"
						onClick={clickReturn}
					/>
					<img
						className="cart"
						src={shoppingCart}
						alt="Cart"
						onClick={clickCart}
					/>
				</section>

				<Title title="Tickets" />
				<DoneTicket />
			</section>
		</main>
	);
}

export default ConfirmationPage;
