import React from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';

function CartOrderPage() {
	const navigate = useNavigate();

	const clickReturn = () => {
		navigate('/'); // function that navigates back to HomePage
	};

	const clickCart = () => {
		navigate('/cart'); // function that navigates to cart page
	};

	return (
		<>
			<section className="icons-section">
				<img
					className="return"
					src={leftArrow}
					alt="Navigate back arrow"
					onClick={clickReturn}
				/>
				<img
					className="cart"
					src={shoppingCart}
					alt="Shopping cart"
					onClick={clickCart}
				/>
			</section>
			<AddToCart>Confirm Order</AddToCart>
			{/* når man bruker children kan man sende direkte text inn i elementet sånn her */}
		</>
	);
}

export default CartOrderPage;
