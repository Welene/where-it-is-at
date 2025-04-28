import React from 'react'

function Events() {
  return (
    <section className="all-events">
        <article className="all-events__container">

            <div className="all-events__container-div">
                <p className="all-events__container-date"></p>
            </div>

            <div className="all-events__container-div">
                <h2 className="all-events__container-artist"></h2>
                <p className="all-events__container-place"></p>
                <p className="all-events__container-time"></p>
            </div>

            <div className="all-events__container-div">
                <p className="all-events__container-price"></p>
            </div>
            
        </article>
    </section>
  )
}

export default Events