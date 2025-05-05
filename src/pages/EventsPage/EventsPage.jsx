import React from 'react'
import Header from '../../components/Header/Header'

import useFetch from '../../hooks/useFetch';

import Lottie from 'lottie-react';
import animationData from '../../assets/loadingAnimation.json'; 
import Events from '../../components/Events/Events';

import './eventsPage.css';



function EventsPage() {
  const {data : concerts, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/events.json');

  if (isLoading) {
    return (
      <section className="loading-section">
        <Lottie animationData={animationData} loop autoplay style={{ width: 300, height: 300 }} />
      </section>
    );
  }

  if (isError) return <section className='page'><p> Helene did not definitely not do a good enough job with this part of the code apparently </p> </section>;

  return (
    <>
    <section className="page page-events">
        <Header title="Events"/>
        <main className='main-section'>
            <input type="text" className="main-section__search" />  
            {
              concerts && <Events concerts={ concerts }/>
            }
        </main>
    </section>
    </>
  )
}

export default EventsPage