import React from 'react';
import './doneTicket.css';

function DoneTicket() {
	return (
		<section className="ticket-section">
			<article className="ticket-section__what">
				<p className="ticket-section__what-title">What</p>
				<h2 className="ticket-section__what-txt"></h2>
				{/* eksempel: {concert.name} inni h2, men her blir det vel litt annerledes
                jeg må vel lagre concerts i localstorage og så hente det og skrive ut på ticket? */}
			</article>

			<article className="ticket-section__where">
				<p className="ticket-section__where-title">Where</p>
				<p className="ticket-section__where-txt"></p>
			</article>

			<article className="ticket-section__container">
				<article className="ticket-section__when">
					<p className="ticket-section__when-title">When</p>
					<p className="ticket-section__when-txt"></p>
				</article>
				<article className="ticket-section__from">
					<p className="ticket-section__from-title">From</p>
					<p className="ticket-section__from-txt"></p>
				</article>
				<article className="ticket-section__to">
					<p className="ticket-section__to-title">To</p>
					<p className="ticket-section__to-txt"></p>
				</article>
			</article>

			<article className="ticket-section__info">
				<p className="ticket-section__info-txt">Info</p>
			</article>

			<article className="ticket-section__id-number">
				<p className="ticket-section__id-txt">Ticket Number</p>
			</article>
		</section>
	);
}

export default DoneTicket;
