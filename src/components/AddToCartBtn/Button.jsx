import React from 'react';
import './button.css';

function Cart({ count, eventId, price, where, when, name, children }) {
	const handleClick = () => {
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
	};

	return (
		<button className="cart-btn" onClick={handleClick} disabled={count < 1}>
			{children || 'Lägg i varukorgen'}
		</button>
	);
}

export default Cart;
