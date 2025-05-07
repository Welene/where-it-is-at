import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';
import './cartOrderPage.css';
import Title from '../../components/Title/Title';

function CartOrderPage() {
	const [name, setName] = useState('');
	const [when, setWhen] = useState(null);
	const [count, setCount] = useState(0);
	const [hasItems, setHasItems] = useState(false); // 👈 for å sjekke om cart er tom
	const navigate = useNavigate();

	// Hent siste ordre fra localStorage
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		if (cart.length > 0) {
			const latestItem = cart[cart.length - 1];
			setName(latestItem.name);
			setWhen(latestItem.when);
			setCount(latestItem.tickets);
			setHasItems(true);
		} else {
			setHasItems(false);
		}
	}, []);

	const clickReturn = () => navigate('/');
	const clickCart = () => navigate('/cart');

	const confirmOrder = () => {
		let cart = JSON.parse(localStorage.getItem('cart')) || [];

		if (cart.length > 0) {
			// Oppdater siste item med riktig antall billetter
			cart[cart.length - 1].tickets = count;
			cart[cart.length - 1].totalPrice =
				count * cart[cart.length - 1].price;
		}

		// Lagre ordren separat
		localStorage.setItem('confirmedTickets', JSON.stringify(cart));

		// Tøm handlekurven
		localStorage.removeItem('cart');

		// Naviger til confirmation-siden
		navigate('/confirmation');
	};

	return (
		<>
			<section className="page order-section">
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

				<Title title="Cart" />

				{hasItems ? (
					<>
						<article className="order-section__container">
							<h2 className="order-section__name">{name}</h2>
							<p className="order-section__when">
								{when?.date} kl {when?.from} - {when?.to}
							</p>
							<div className="order-section__counter">
								<button
									disabled={count < 1}
									className="order-section__counter-btn order-section__counter-btn--remove"
									onClick={() => setCount(count - 1)}>
									-
								</button>
								<p className="order-section__counter-amount">
									{count}
								</p>
								<button
									className="order-section__counter-btn order-section__counter-btn--add"
									onClick={() => setCount(count + 1)}>
									+
								</button>
							</div>
						</article>
						<AddToCart onClick={confirmOrder}>
							Confirm order
						</AddToCart>
					</>
				) : (
					<p className="order-section__empty-msg">
						Your cart is looking lonely...
						<br></br>why not add some artists to it? :-)
					</p>
				)}
			</section>
		</>
	);
}

export default CartOrderPage;
