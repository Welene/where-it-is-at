import React from 'react';

// import Lottie from 'lottie-react';
// import animationData from './assets/loadingAnimation.json'; 
// LOADING ANIMASJON TIL SENERE

// import HomePage from './pages/HomePage/HomePage';
import './index.css';
import SwipeNav from './components/SwipeNavigation/SwipeNavigation';
import FetchAPI from './api/FetchConcerts';

function App() {

  return (
    <>  
      <div className="app">
        <SwipeNav/>
        {/* FetchAPI er bare her i app nå for å teste om den funker */}
        <FetchAPI/> 
        {/* <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />   */}
        {/* LOADING ANIMASJON TIL SENERE */}
      </div>
    </>
  );
}

export default App;
