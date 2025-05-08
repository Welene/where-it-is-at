import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';
import './cartOrderPage.css';
import Title from '../../components/Title/Title';
import { v4 as uuidv4 } from 'uuid';

function CartOrderPage() {
	const [cartItems, setCartItems] = useState([]);
	const [seatNumbers, setSeatNumbers] = useState([]);
	const navigate = useNavigate();

	// Helper to generate short readable ID
	const generateShortId = () => {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let result = '';
		for (let i = 0; i < 5; i++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return result;
	};

	// Helper to get a random section A–H
	const getRandomSection = () => {
		const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		return sections[Math.floor(Math.random() * sections.length)];
	};

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(cart);

		const updatedItems = cart.map((item) => {
			const baseUuid = uuidv4(); // Internal unique ID
			const shortId = generateShortId(); // Displayed receipt ID
			const section = getRandomSection(); // Shared section
			const startingSeat = Math.floor(Math.random() * 90) + 1;

			// Create a ticket for each seat
			const tickets = Array.from({ length: item.tickets }, (_, i) => ({
				...item,
				seatNumber: startingSeat + i,
				section,
				uniqueId: baseUuid, // Internal use
				displayId: shortId, // For showing
			}));

			return tickets;
		});

		setSeatNumbers(updatedItems.flat());
	}, []);

	const clickReturn = () => navigate('/');
	const clickCart = () => navigate('/cart');

	const updateTicketCount = (index, delta) => {
		const updatedItems = [...cartItems];
		updatedItems[index].tickets += delta;
		if (updatedItems[index].tickets < 0) return;

		updatedItems[index].totalPrice =
			updatedItems[index].tickets * updatedItems[index].price;

		setCartItems(updatedItems);
		localStorage.setItem('cart', JSON.stringify(updatedItems));
	};

	const confirmOrder = () => {
		localStorage.setItem('confirmedTickets', JSON.stringify(seatNumbers));
		localStorage.removeItem('cart');
		navigate('/confirmation');
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
								{item.when?.date} kl {item.when?.from} - {''}
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
					<br /> Why not add some artists to it? :)
				</p>
			)}
		</section>
	);
}

export default CartOrderPage;
