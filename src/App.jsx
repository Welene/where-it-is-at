import React from 'react';
import './index.css';
import SwipeNav from './components/SwipeNavigation/SwipeNavigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailedEventPage from './pages/DetailedEventPage/DetailedEventPage';
import CartOrderPage from './pages/CartOrderPage/CartOrderPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

// All routing in the app
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
