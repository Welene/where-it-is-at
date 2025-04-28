import React from 'react';

// import Lottie from 'lottie-react';
// import animationData from './assets/loadingAnimation.json'; 
// LOADING ANIMASJON TIL SENERE
// import Footer from './components/Footer/Footer';
// import HomePage from './pages/HomePage/HomePage';
import './index.css';
import SwipeNav from './components/SwipeNavigation/SwipeNavigation';

function App() {
  // let myName = 'Bob';
  // let isCool = true;

  return (
    <>  
      <div className="app">
        <SwipeNav/>
        {/* <h1 className="title">
          {myName} er {isCool ? '' : 'ikke'} kul
        </h1>

        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />  */}
        {/* LOADING ANIMASJON TIL SENERE */}
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
