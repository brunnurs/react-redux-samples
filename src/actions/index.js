import axios from 'axios';

const API_KEY = 'c9fe971e1f76fa0f413b449303dd7487';
const WEATHER_URL_BASE = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${WEATHER_URL_BASE}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}