const axios = require("axios");

const API_KEY = "51640efff93013e7a4ffcdfd36eea11c";

const units = "metric";

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${units}`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
