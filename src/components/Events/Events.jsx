import React from 'react';
import './events.css';

function Events({ concerts }) {
    return (
        <section className="all-events">
            {concerts.map(concert => {
                const [day, month] = concert.when.date.split(" ");
                const eventDay = day.padStart(2, '0'); // adds a 0 in front of 1-digit days
                const eventMonth = month.slice(0, 3);  // shortens month to 3 letters

                return (
                    <article key={concert.id} className="all-events__container">
                        <div className="all-events__container-div">
                            <p className="all-events__container-date">{eventDay} <br/> {eventMonth}</p>
                        </div>

                        <div className="all-events__container-div">
                            <h2 className="all-events__container-artist">{concert.name}</h2>
                            <p className="all-events__container-place">{concert.where}</p>
                            <p className="all-events__container-time">
                                {concert.when.from} – {concert.when.to}
                            </p>
                            {/* KANSKJE HA DISSE I EN EGEN FLEX CONTAINER? SÅ ALT BLIR PÅ LIK LINJE*/}
                        </div>

                        <div className="all-events__container-div">
                            <p className="all-events__container-price">{concert.price} sek</p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default Events;
