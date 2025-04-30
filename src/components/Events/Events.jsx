import React from 'react';

function Events({ concerts }) {
    return (
        <section className="all-events">
            {concerts.map(concert => ( // maps through every concerts (AKA data), for every concert --
                <article key={concert.id} className="all-events__container"> {/* we find the id in every data that we loop through -- connects id with a key -- AKA they are the same */}
                    <div className="all-events__container-div">
                        <p className="all-events__container-date">{concert.when.date}</p>
                    </div>

                    <div className="all-events__container-div">
                        <h2 className="all-events__container-artist">{concert.name}</h2>
                        <p className="all-events__container-place">{concert.where}</p>
                        <p className="all-events__container-time">  {concert.when.from} – {concert.when.to}</p>
                    </div>

                    <div className="all-events__container-div">
                        <p className="all-events__container-price">{concert.price}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Events;
