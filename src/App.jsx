import React from 'react';

// import Lottie from 'lottie-react';
// import animationData from './assets/loadingAnimation.json';
// LOADING ANIMASJON TIL SENERE

// import HomePage from './pages/HomePage/HomePage';
import './index.css';
import SwipeNav from './components/SwipeNavigation/SwipeNavigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DetailedEventPage from './pages/DetailedEventPage/DetailedEventPage';
import CartOrderPage from './pages/CartOrderPage/CartOrderPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

// function App() {

//   return (
//     <>
//       <div className="app">
//         <SwipeNav/>
//         {/* FetchAPI er bare her i app nå for å teste om den funker */}
//         {/* <FetchAPI/>  */}
//         {/* <Lottie
//           animationData={animationData}
//           loop
//           autoplay
//           style={{ width: 300, height: 300 }}
//         />   */}
//         {/* LOADING ANIMASJON TIL SENERE */}
//       </div>
//     </>
//   );
// }

// export default App;

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<SwipeNav />
			</>
		),
	},
	{
		path: '/event/:id',
		element: (
			<>
				<DetailedEventPage />
			</>
		),
	},
	{
		path: '/cart',
		element: (
			<>
				<CartOrderPage />
			</>
		),
	},
	{
		path: '/confirmation',
		element: (
			<>
				<ConfirmationPage />
			</>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
