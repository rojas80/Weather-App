
function contentLayout(weatherData){
    const currentTemp = document.createElement('p');
    currentTemp.textContent = weatherData.current.temp_f + "°F";;
    const appMainContainer = document.querySelector('.appMainContainer');
    const icon = document.createElement('img');
    icon.src = weatherData.current.condition.icon;
    const locationName = document.createElement('p');
    locationName.textContent = weatherData.location.name;

    const feelsLikeText = document.createElement('p');
    feelsLikeText.textContent = 'Feels like: ' + weatherData.current.feelslike_f;

    const locationRegion = document.createElement('p');
    locationRegion.textContent = weatherData.location.region;

    const sunRise = document.createElement('p');
    sunRise.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
    const sunSet = document.createElement('p');
    sunSet.textContent = weatherData.forecast.forecastday[0].astro.sunset;

    const maxTemp = document.createElement('p');
    maxTemp.textContent = weatherData.forecast.forecastday[0].day.maxtemp_f;
    const chanceOfRain = document.createElement('p');
    chanceOfRain.textContent = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
    const avgTemp = document.createElement('p');
    avgTemp.textContent = weatherData.forecast.forecastday[0].day.avgtemp_f;
    const avgVis = document.createElement('p');
    avgVis.textContent = weatherData.forecast.forecastday[0].day.avgvis_miles;

    appMainContainer.append(icon, currentTemp, feelsLikeText, locationName, locationRegion );
    appMainContainer.append(sunRise, sunSet, maxTemp, chanceOfRain, avgTemp,avgVis);

}
export default contentLayout;