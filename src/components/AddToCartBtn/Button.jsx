import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

function Cart({ count, eventId, price, where, when, name, children, onClick }) {
	const navigate = useNavigate();

	const defaultClick = () => {
		const oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		const newCartItem = {
			id: eventId,
			name: name,
			where: where,
			when: when,
			tickets: count,
			price: price,
			totalPrice: count * price,
		};
		localStorage.setItem('cart', JSON.stringify([...oldCart, newCartItem]));
		navigate('/cart');
	};

	return (
		<button
			className="cart-btn"
			onClick={onClick || defaultClick}
			disabled={count < 1}>
			{children || 'Add to cart'}
			{/* defaultClick gjør at knappen kan brukes som både Lägg till varukorg-knapp og en knapp som Skickar order og oppdaterer LS. Uten denne vil Lägg till varukorg knappen styre over Skicka order knappen og Skicka Order knappen får ikke oppdatert LS. */}
		</button>
	);
}

export default Cart;
