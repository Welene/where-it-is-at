import React from 'react';
import './events.css';
import { useNavigate } from 'react-router-dom';

// Events component on the EventsPage -- sends in the needed data props
function Events({ concerts }) {
	const navigate = useNavigate();
	return (
		<section className="all-events">
			{concerts.map((concert) => {
				const [day, month] = concert.when.date.split(' ');
				const eventDay = day.padStart(2, '0'); // adds a 0 in front of 1-digit days
				const eventMonth = month.slice(0, 3); // shortens month to 3 letters

				return (
					<article
						key={concert.id}
						className="all-events__container"
						onClick={() => navigate(`/event/${concert.id}`)}>
						<div className="all-events__container-div">
							<p className="all-events__container-date">
								{eventDay} <br /> {eventMonth}
							</p>
						</div>

						<div className="all-events__container-div">
							<h2 className="all-events__container-artist">
								{concert.name}
							</h2>
							<p className="all-events__container-place">
								{concert.where}
							</p>
							<p className="all-events__container-time">
								{concert.when.from} – {concert.when.to}
							</p>
						</div>

						<div className="all-events__container-div">
							<p className="all-events__container-price">
								{concert.price} sek
							</p>
						</div>
					</article>
				);
			})}
		</section>
	);
}

export default Events;
