import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true); // LOADING is true when we try to get URL
		axios
			.get(url)
			.then((response) => {
				if (Array.isArray(response.data.events)) {
					//checks if I have an array...
					setData(response.data.events); // use "data" to extract the "events" from the API object
				} else {
					setData([]); // if there is no array with events in it, we (we? I mean me) make an empty array
				}
				setIsError(false); // if API call succeeds, it changes setIsError useState to false
			})
			.catch((error) => {
				console.error('SHIT', error.message); // if all goes to shit - we make sure to catch it!
				setIsError(true); // if API call fails, changes setIsError useState to true
			})
			.finally(() => setIsLoading(false)); // changing loading back to false after it is all done
	}, [url]); // useFetch only runs if the URL changes

	return { data, isLoading, isError }; // returns data, isLoading & isError up to useFetch again
}

export default useFetch;
