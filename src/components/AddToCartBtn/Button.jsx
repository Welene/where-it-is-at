import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

function Cart({ count, eventId, price, where, when, name, children, onClick }) {
	const navigate = useNavigate();

	const defaultClick = () => {
		const oldCart = JSON.parse(localStorage.getItem('cart')) || [];
		// vår oldCart har keyen "cart" -- vi lager cart til en array -- om det ikke er noe i den er den tom i starten
		const existingIndex = oldCart.findIndex((item) => item.id === eventId);
		// findIndex sjekker vår oldCart om vi allerede har et event med samme eventId i handlekurven/local storage
		// gir oss indexen til det første som matcher // om ingen matcher finnes får man -1

		// her lages det et nytt objekt med alle disse som skal være med
		const newCartItem = {
			id: eventId,
			name: name,
			where: where,
			when: when,
			tickets: count,
			price: price,
			totalPrice: count * price,
		};

		// variabel som vi lagrer vår nye cart i, om vi endrer antall billetter eller om vi vil legge til flere eventer til handlekurven
		let updatedCart;

		// om indexen man får tilbake IKKE er -1 -- betyr det at ID-ene matcher og vi har lagt til samme event AKA den legges ikke til
		// MEN VI HAR ENDRET BILLETTER så vi oppdaterer oldCart med newCartItem -- og sier at oldCart er nå updatedCart
		if (existingIndex !== -1) {
			// Eventet finnes allerede – oppdater
			oldCart[existingIndex] = newCartItem;
			updatedCart = oldCart;
		} else {
			// else -- at eventenes ID ikke matcher/er det samme -- legger vi til det eventet som et nytt objekt i arrayen
			// ved at vi lager en kopi av oldCart og legger til newCartItem og lagrer dette i vår updatedCart
			updatedCart = [...oldCart, newCartItem];
		}

		localStorage.setItem('cart', JSON.stringify(updatedCart));
		// SÅ LAGRES updatedCart til key-en "cart" som vi har i local storage, sånn at alle events/objekter kan ligge inni der nå
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
