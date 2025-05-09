import './counter.css';
import useFetch from '../../hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AddToCart from '../AddToCartBtn/Button';

// local Counter function for DetailedEventPage only
function Counter() {
	const [count, setCount] = useState(0);
	const { id } = useParams();
	const {
		data: events,
		// isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/events.json');
	// using the useFetch function to fetch this URL AKA the events data

	if (isError) return <p>Something is wrong with event data</p>;
	const event = events.find((e) => e.id === id);
	if (!event) return <p>No event here</p>;
	const { price, name, where, when } = event;

	return (
		<>
			{/* calculating total amount in SEK, adding and removing amount of tickets */}
			<section className="tickets-section">
				<p className="tickets-section__total-price">
					{price * count} SEK
				</p>
				<button
					disabled={count < 1}
					className="tickets-section__remove"
					onClick={() => setCount(count - 1)}>
					-
				</button>
				<p className="tickets-section__amount-tickets">{count}</p>
				<button
					className="tickets-section__add"
					onClick={() => setCount(count + 1)}>
					+
				</button>
			</section>
			<AddToCart
				count={count}
				eventId={id}
				price={price}
				where={where}
				when={when}
				name={name}
			/>
		</>
	);
}

export default Counter;
