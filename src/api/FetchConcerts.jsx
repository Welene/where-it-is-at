import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchAPI() { 
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/events.json')
      .then((response) => {
        console.log('Næh harru setthær va d data førr farsken', response.data); 
        setData(response.data);
      })
      .catch((error) => {
        console.error('Something is wrong!!!', error);
      });
  }, []);

  return;
}

export default FetchAPI;
