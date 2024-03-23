
const getTemperature = async (cityNamesArray) => {
  
  const temperatureArray = [];
  
  await Promise.all(
    cityNamesArray.map(async (cityName) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_APIKEY}&units=metric`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        let temperature = data.main.temp;
        temperature = Math.abs(temperature).toString();
        if (temperature < 10 && temperature >= 0) {
          temperature = "0" + temperature;
        }
        temperature = temperature.substring(0, 2);
        temperatureArray.push(temperature);
      } catch (error) {
        console.error("Error:", error);
      }
    })
  );
  return temperatureArray;
};

export default getTemperature;
