import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './detailedEventPage.css';
import Counter from '../../components/Counter/Counter';
import leftArrow from '../../assets/left.svg';
import shoppingCart from '../../assets/cart.svg';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';

function DetailedEventPage() {
	const { id } = useParams(); // useParams henter id-en fra URL-en
	// bruker custom hooken jeg lagde "useFetch" for å hente data fra API-et

	const navigate = useNavigate();
	const {
		data: events,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/events.json');

	if (isLoading) return <p>Loading...</p>;
	// sett inn loading animasjon her senere
	if (isError) return <p> Her er det noe som ikke vil vises </p>;
	if (!events || events.length === 0) return <p>No events found</p>; // makes it not crash if array is still empty or undefined

	const event = events.find((e) => e.id === id);
	// find = ser gjennom hele arrayen i API-et og finner det første som matcher ID-en
	// e (hvert event) sjekker om e.id er det samme som id useParams hentet

	if (!event) return <p>Event not found</p>;

	const { name, where, when } = event;
	// destrukturerer verdier fra API-et som vi skal vise på siden i en og
	// samme variabel så alt blir på en linje, så vi kan bruke disse nedenfor:

	const clickReturn = () => {
		navigate('/');
	};

	const clickCart = () => {
		navigate('/cart');
	};

	return (
		<>
			<main className="main-section">
				<section className="page detailed-page">
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
					<section className="event-details">
						<Title title="Event" />
						<p className="event-details__happening">
							You are about to score some tickets to
						</p>

						<h2 className="event-details__artist">{name}</h2>
						<p className="event-details__time">
							{when.date} kl {when.from} - {when.to}
						</p>
						<p className="event-details__location">@ {where}</p>
					</section>

					<Counter where={where} when={when} name={name} />
				</section>
			</main>
		</>
	);
}

export default DetailedEventPage;
