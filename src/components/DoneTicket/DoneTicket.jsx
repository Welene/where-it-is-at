import React, { useState, useEffect } from 'react';
import './doneTicket.css';
import barCode from '../../assets/bar.svg';

// DoneTicket component for the ConfirmationPage, all articles is inside a scroll container
function DoneTicket() {
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		const confirmed =
			JSON.parse(localStorage.getItem('confirmedTickets')) || [];
		setTickets(confirmed);
	}, []);

	return (
		<>
			<div className="scroll-container">
				{tickets.map((ticket, index) => (
					<section className="ticket-section" key={index}>
						<article className="ticket-section__what">
							<p className="ticket-section__what-heading">WHAT</p>
							<p className="ticket-section__what-title">
								{ticket.name}
							</p>
						</article>

						<article className="ticket-section__where">
							<p className="ticket-section__where-heading">
								WHERE
							</p>
							<p className="ticket-section__where-title">
								{ticket.where}
							</p>
						</article>

						<article className="ticket-section__container">
							<article className="ticket-section__when">
								<p className="ticket-section__when-heading">
									WHEN
								</p>
								<p className="ticket-section__when-title">
									{ticket.when?.date}
								</p>
							</article>
							<article className="ticket-section__from">
								<p className="ticket-section__from-heading">
									FROM
								</p>
								<p className="ticket-section__from-title">
									{ticket.when?.from}
								</p>
							</article>
							<article className="ticket-section__to">
								<p className="ticket-section__to-heading">TO</p>
								<p className="ticket-section__to-title">
									{ticket.when?.to}
								</p>
							</article>
						</article>

						<article className="ticket-section__info">
							<p className="ticket-section__info-heading">INFO</p>
							<p className="ticket-section__info-txt">
								Section: {ticket.section} | Seat:{' '}
								{ticket.seatNumber}
							</p>
						</article>

						<article className="ticket-section__id-number">
							<img
								src={barCode}
								alt="Barcode"
								className="ticket-section__id-bar"
							/>
							<p className="ticket-section__id-txt">
								#{ticket.displayId}
							</p>
						</article>
					</section>
				))}
			</div>
		</>
	);
}

export default DoneTicket;
