import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swipeNavigation.css';
import HomePage from '../../pages/HomePage/HomePage';
import EventsPage from '../../pages/EventsPage/EventsPage';
import ConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage';

// The pagination Swiper (slider)
function SwipeNav() {
	return (
		<section className="swipe-section">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar]}
				slidesPerView={1}
				direction="horizontal"
				loop={true}
				pagination={{ clickable: true }}
				// navigation={true}
				// scrollbar={{ draggable: true }}
				className="swipe-section__navigation">
				{/* I need 3 pagination slides */}
				<SwiperSlide>
					<HomePage />
				</SwiperSlide>
				<SwiperSlide>
					<EventsPage />
				</SwiperSlide>
				<SwiperSlide>
					<ConfirmationPage />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default SwipeNav;
