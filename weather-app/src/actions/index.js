import axios from 'axios'
// import Moment from 'react-moment'

// TODO: Epoch date - 1526529600

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const DARK_SKY_API_KEY = '---';
const DARK_SKY_URL = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}`;

const GEO_API_KEY = '---';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // const url = `${DARK_SKY_URL}&q=${city},us`;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${GEO_API_KEY}`;

  return (dispatch) => {
      axios.get(url)
          .then((response) => {
              console.log(response);
              if (response.status !== 200) {
                  throw Error(response.statusText);
                  // dispatch(itemsHaveError(true));
              }
              dispatch( {
                  type: FETCH_WEATHER,
                  payload: response
              });
          })
  };

}