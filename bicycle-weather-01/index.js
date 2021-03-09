require('dotenv').config();
const axios = require('axios');

module.exports = async function (context, req) {
    const cityName = (req.query.cityName || (req.body && req.body.cityName));
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    context.res = {
        body: response.data
    };
}