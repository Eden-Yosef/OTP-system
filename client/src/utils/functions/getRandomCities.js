import cities from "../citiesArray";

const getRandomCities = () => {
  const selectedCities = [];
  while (selectedCities.length < 3) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomIndex];
    if (!selectedCities.includes(randomCity)) {
      selectedCities.push(randomCity);
    }
  }
  return selectedCities;
};
export default getRandomCities;
