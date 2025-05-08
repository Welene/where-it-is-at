import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';
import './cartOrderPage.css';
import Title from '../../components/Title/Title';

function CartOrderPage() {
	const [cartItems, setCartItems] = useState([]); // Endret til array
	const navigate = useNavigate();

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(cart); // lagre hele arrayen
	}, []);

	const clickReturn = () => navigate('/');
	const clickCart = () => navigate('/cart');

	const confirmOrder = () => {
		localStorage.setItem('confirmedTickets', JSON.stringify(cartItems));
		localStorage.removeItem('cart');
		navigate('/confirmation');
	};

	const updateTicketCount = (index, delta) => {
		const updatedItems = [...cartItems];
		updatedItems[index].tickets += delta;

		// Ikke tillat negative verdier
		if (updatedItems[index].tickets < 0) return;

		// Oppdater totalpris
		updatedItems[index].totalPrice =
			updatedItems[index].tickets * updatedItems[index].price;

		setCartItems(updatedItems);
		localStorage.setItem('cart', JSON.stringify(updatedItems));
	};

	return (
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

			{cartItems.length > 0 ? (
				<>
					{cartItems.map((item, index) => (
						<article
							key={item.id}
							className="order-section__container">
							<h2 className="order-section__name">{item.name}</h2>
							<p className="order-section__when">
								{item.when?.date} kl {item.when?.from} -{' '}
								{item.when?.to}
							</p>
							<div className="order-section__counter">
								<button
									className="order-section__counter-btn order-section__counter-btn--remove"
									onClick={() => updateTicketCount(index, -1)}
									disabled={item.tickets < 1}>
									-
								</button>
								<p className="order-section__counter-amount">
									{item.tickets}
								</p>
								<button
									className="order-section__counter-btn order-section__counter-btn--add"
									onClick={() => updateTicketCount(index, 1)}>
									+
								</button>
							</div>
						</article>
					))}

					<AddToCart onClick={confirmOrder}>Confirm order</AddToCart>
				</>
			) : (
				<p className="order-section__empty-msg">
					Your cart is looking lonely...
					<br /> Why not add some artists to it? :-)
				</p>
			)}
		</section>
	);
}

export default CartOrderPage;
