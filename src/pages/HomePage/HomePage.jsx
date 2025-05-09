import React from 'react';
import concertLogo from '../../assets/concert-logo.svg';
import concertTitle from '../../assets/concert-title.svg';
import './homePage.css';
import confetti from 'canvas-confetti';

// Simple homepage with animation! woo
// *remember to add animation here or it will be awkward...*
function HomePage() {
	return (
		<>
			<section className="page page-home">
				<main className="main-section">
					<img
						src={concertLogo}
						alt="Where It's At Logo"
						onClick={() => {
							confetti({
								particleCount: 50,
								spread: 35,
								origin: { y: 0.6 },
							});
						}}
					/>
					<img src={concertTitle} alt="Where It's At Title" />
					<h2 className="main-section__quote">Ticketing made easy</h2>
				</main>
			</section>
		</>
	);
}

export default HomePage;
