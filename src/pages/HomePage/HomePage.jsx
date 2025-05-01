import React from 'react'
import concertLogo from '../../assets/concert-logo.svg';
import concertTitle from '../../assets/concert-title.svg';
import './homePage.css';

function HomePage() {
  return (
    <>
    <section className="page page-home">
      <main className='main-section'>
        <img src={concertLogo} alt="Where It's At Logo" />
        <img src={concertTitle} alt="Where It's At Title" />
        <p className="main-section__quote">Ticketing made easy</p>
      </main>
    </section>
    </>
  )
}

export default HomePage;

