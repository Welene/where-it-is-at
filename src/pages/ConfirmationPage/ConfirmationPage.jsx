import React from 'react';
// import Header from '../../components/Header/Header';
import './confirmationPage.css';
import DoneTicket from '../../components/DoneTicket/DoneTicket';
import Title from '../../components/Title/Title';

function ConfirmationPage() {
	return (
		<>
			<section className="page page-confirmation">
				<Title title="Tickets" />
				<main className="main-section">
					{/* TING HER */}
					<DoneTicket />
				</main>
			</section>
		</>
	);
}

export default ConfirmationPage;
