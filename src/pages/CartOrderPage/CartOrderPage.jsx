import React from 'react';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import AddToCart from '../../components/AddToCartBtn/Button';
import './cartOrderPage.css';
import Title from '../../components/Title/Title';

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
			<section className="page order-section">
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
				<Title title="Order" />

				<article className="order-section__container">
					<h2 className="order-section__name"> Artistnavn ~prop~ </h2>
					<p className="order-section__when"> Dato & Tid ~~prop~ </p>
					<div className="order-section__counter">
						<button className="order-section__counter-btn order-section__counter-btn--remove">
							-
						</button>
						<p className="order-section__counter-amount">x</p>
						<button className="order-section__counter-btn order-section__counter-btn--add">
							+
						</button>
					</div>
				</article>

				<AddToCart> Skicka order </AddToCart>
			</section>
			{/* når man bruker children kan man sende direkte text inn i elementet sånn her */}
		</>
	);
}

export default CartOrderPage;
