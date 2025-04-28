import React from 'react';

// import Lottie from 'lottie-react';
// import animationData from './assets/loadingAnimation.json'; 
// LOADING ANIMASJON TIL SENERE
// import Footer from './components/Footer/Footer';
// import HomePage from './pages/HomePage/HomePage';
import './index.css';
import SwipeNav from './components/SwipeNavigation/SwipeNavigation';

function App() {

  return (
    <>  
      <div className="app">
        <SwipeNav/>
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
