import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';
import './cartOrderPage.css';
import Title from '../../components/Title/Title';
import { v4 as uuidv4 } from 'uuid';
import useCounterStore from '../../store/counterStore';

// function for editing amount of tickets -- adding ticket #ID, seats & sections + confirming the order, nav to confirmationPage & eremoving all events from your cart
function CartOrderPage() {
	const navigate = useNavigate();
	const { cartItems, updateTicketCount, setCartItems } = useCounterStore();
	const [seatNumbers, setSeatNumbers] = useState([]);

	// function that gives random ticket ID
	const generateShortId = () => {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		return Array.from({ length: 5 }, () =>
			chars.charAt(Math.floor(Math.random() * chars.length))
		).join('');
	};

	// function that gives random sitting section between A-H
	const getRandomSection = () => {
		const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		return sections[Math.floor(Math.random() * sections.length)];
	};

	// when you load the page -- the localStorage cart is sent into the global state/store
	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(storedCart);
	}, [setCartItems]);

	// when cartItems change in the global state, it gived you a random seat-number with UUID
	// it also uses the shortId and RandomSection function to give you a random sitting section & a ticket #ID
	useEffect(() => {
		const updatedSeats = cartItems.flatMap((item) => {
			const baseUuid = uuidv4();
			const shortId = generateShortId();
			const section = getRandomSection();
			const startSeat = Math.floor(Math.random() * 90) + 1;

			return Array.from({ length: item.tickets }, (_, i) => ({
				...item,
				seatNumber: startSeat + i,
				section,
				uniqueId: baseUuid,
				displayId: shortId,
			}));
		});

		setSeatNumbers(updatedSeats);
	}, [cartItems]);

	const clickReturn = () => navigate('/');
	const clickCart = () => navigate('/cart');

	// clicking confirm order stores confirmedTickets and removes the old cart from the varukorg page -- navigates to /confirmation page (where you see all your tickets, seats, sections etc)
	const confirmOrder = () => {
		localStorage.setItem('confirmedTickets', JSON.stringify(seatNumbers));
		localStorage.removeItem('cart');
		navigate('/confirmation');
	};

	// calculates and sows total price of ALL the added events in CartPage
	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.totalPrice,
		0
	);

	return (
		<section className="page order-section">
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

							{/* buttons for adding and removing tickets */}
							<div className="order-section__counter">
								<button
									className="order-section__counter-btn order-section__counter-btn--remove"
									onClick={() => updateTicketCount(index, -1)}
									disabled={item.tickets < 1}>
									{/* you can't click on the button if you have 0 tickets */}
									-
								</button>
								<p className="order-section__counter-amount">
									{item.tickets}
									{/* displays the amount of tickets you first chose on the DetailedEventPage */}
								</p>
								<button
									className="order-section__counter-btn order-section__counter-btn--add"
									onClick={() => updateTicketCount(index, 1)}>
									+
								</button>
							</div>
						</article>
					))}

					<p className="order-section__total">GIMMI UR MONNI NÆOW:</p>
					<p className="order-section__pay">{totalPrice} SEK</p>

					<AddToCart onClick={confirmOrder}>Confirm order</AddToCart>
				</>
			) : (
				// message for the user if your cart has to events in it
				<p className="order-section__empty-msg">
					Your cart is looking lonely...
					<br /> Why not add some artists to it? :)
				</p>
			)}
		</section>
	);
}

export default CartOrderPage;
