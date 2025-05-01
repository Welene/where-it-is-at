import React from 'react'
import Header from '../../components/Header/Header'
import './confirmationPage.css';
import DoneTicket from '../../components/DoneTicket/DoneTicket';

function ConfirmationPage() {
  return (
    <>
    <section className="page page-confirmation">
      <Header title="Tickets"/>
      <main className='main-section'>
          {/* TING HER */}
          <DoneTicket/>
      </main>
    </section>
    </>
  )
}

export default ConfirmationPage