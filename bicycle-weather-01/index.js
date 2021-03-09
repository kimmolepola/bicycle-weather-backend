require('dotenv').config();
const axios = require('axios');

module.exports = async function (context, req) {
    const cityName = (req.query.cityName || (req.body && req.body.cityName));
    console.log("http request, cityName: ", cityName);
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`)
    context.res = {
        body: response.data
    };
}