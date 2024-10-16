import axios from 'axios';

const getColor = () => axios.get('https://www.thecolorapi.com/random?format=json', {cache: "no-cache"});

const colorApis = { getColor }

export default colorApis;