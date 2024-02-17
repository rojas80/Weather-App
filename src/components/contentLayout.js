const {format, parse} = require("date-fns");

function currentWeatherDataLayout(weatherData){
    const currentWeatherContainer = document.querySelector('.currentWeatherContainer');
    const dataContainer = document.createElement('div');
    dataContainer.classList.add('currentWeatherInfo');
    const iconContainer = document.createElement('div');

    const locationName = document.createElement('p');
    locationName.textContent = weatherData.location.name;

    const condition = document.createElement('P');
    condition.textContent = weatherData.current.condition.text;

    const currentTemp = document.createElement('p');
    currentTemp.textContent = weatherData.current.temp_f + '°F';

    const icon = document.createElement('img');
    icon.src = weatherData.current.condition.icon;

    const parsedDate = parse(weatherData.current.last_updated, 'yyyy-MM-dd HH:mm', new Date());
    const formattedDate = format(parsedDate, 'E MMM d');
   
    const presentDate = document.createElement('p');
    presentDate.textContent = formattedDate;
    dataContainer.append(locationName, condition, currentTemp, presentDate);

    iconContainer.append(icon);

    currentWeatherContainer.append(dataContainer,iconContainer);
}

function twoDaysForecastLayout(weatherData){
    const twoDaysForecastContainer = document.querySelector('.twoDaysForecastContainer');
    const title = document.createElement('h2');
    title.textContent = '2-DAY FORECAST';

    const daysForecastContainer = document.createElement('div');
    daysForecastContainer.classList.add('daysForecastContainer');
    
    const forecastData =  weatherData.forecast.forecastday;

    twoDaysForecastContainer.append(title);

    for(let daysIndex = 1; daysIndex < forecastData.length; daysIndex++){

        const subForecastContainer = document.createElement('div');
        subForecastContainer.classList.add('subForecastContainer');

        const forecastIcon = document.createElement('img');
        forecastIcon.src = forecastData[daysIndex].day.condition.icon;

        const forecastAvgTemp = document.createElement('p');
        forecastAvgTemp.text = forecastData[daysIndex].day.avgtemp_f + '°F';

        const forecastText = document.createElement('p');
        forecastText.textContent = forecastData[daysIndex].day.condition.text;

        const maxMInTemp = document.createElement('p');
        maxMInTemp.textContent = forecastData[daysIndex].day.maxtemp_f +'°F / '+ forecastData[daysIndex].day.mintemp_f + '°F';

        const forecastDate = document.createElement('p');

        const parsedDate = parse(forecastData[daysIndex].hour[daysIndex].time, 'yyyy-MM-dd HH:mm', new Date());
        const formattedDate = format(parsedDate, 'E MMM d');
        forecastDate.textContent = formattedDate;

        subForecastContainer.append(forecastIcon, forecastAvgTemp, forecastText, maxMInTemp, forecastDate);
        daysForecastContainer.append(subForecastContainer);
        twoDaysForecastContainer.append(daysForecastContainer);
    }
}

function currentWeatherDetailsLayout(weatherData){
    const currentDetails = document.querySelector('.currentDetails');

    const feelsLikeTextContainer = document.createElement('div');
    const feelsLikeText = document.createElement('p');
    const feelsLikeTextData = document.createElement('p');
    feelsLikeText.textContent = 'Feels like';
    feelsLikeTextData.textContent = weatherData.current.feelslike_f + '°F';
    feelsLikeTextContainer.append(feelsLikeText, feelsLikeTextData);

    const sunRiseContainer = document.createElement('div');
    const sunRiseText = document.createElement('p');
    const sunRiseData = document.createElement('p');
    sunRiseText.textContent = 'Sunrise';
    sunRiseData.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
    sunRiseContainer.append(sunRiseText, sunRiseData);

    const sunSetContainer = document.createElement('div');
    const sunSetText = document.createElement('p');
    const sunSetData = document.createElement('p');
    sunSetText.textContent = 'Sunset';
    sunSetData.textContent = weatherData.forecast.forecastday[0].astro.sunset;
    sunSetContainer.append(sunSetText, sunSetData);

    const maxTempContainer = document.createElement('div');
    const maxTempText = document.createElement('p');
    const maxTempData =  document.createElement('p');
    maxTempText.textContent = 'Max Temp';
    maxTempData.textContent = weatherData.forecast.forecastday[0].day.maxtemp_f + '°F';
    maxTempContainer.append(maxTempText, maxTempData);

    const minTempContainer = document.createElement('div');
    const minTempText = document.createElement('p');
    const minTempData = document.createElement('p');
    minTempText.textContent = 'Min Temp';
    minTempData.textContent = weatherData.forecast.forecastday[0].day.mintemp_f + '°F';
    minTempContainer.append(minTempText, minTempData);

    const chanceOfRainContainer =  document.createElement('div');
    const chanceOfRainText = document.createElement('p');
    const chanceOfRainData = document.createElement('p');
    chanceOfRainText.textContent = 'Chance Of Rain';
    chanceOfRainData.textContent = weatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%';
    chanceOfRainContainer.append(chanceOfRainText, chanceOfRainData);

    const avgTempContainer = document.createElement('div');
    const avgTempText = document.createElement('p');
    const avgTempData = document.createElement('p')
    avgTempText.textContent = 'Avg Temp';
    avgTempData.textContent = weatherData.forecast.forecastday[0].day.avgtemp_f + '°F';
    avgTempContainer.append(avgTempText, avgTempData);

    const avgVisContainer = document.createElement('div');
    const  avgVisText = document.createElement('p');
    const avgVisData = document.createElement('p');
    avgVisText.textContent = 'Visibility';
    avgVisData.textContent = weatherData.forecast.forecastday[0].day.avgvis_miles + ' mph';
    avgVisContainer.append(avgVisText, avgVisData);

    const uvIndexContainer =  document.createElement('div');
    const uvIndexText = document.createElement('p');
    const uvIndexData = document.createElement('p');
    uvIndexText.textContent = 'UV'
    uvIndexData.textContent = weatherData.current.uv;
    uvIndexContainer.append(uvIndexText, uvIndexData);

    currentDetails.append(feelsLikeTextContainer, sunRiseContainer, sunSetContainer, maxTempContainer, minTempContainer, chanceOfRainContainer, avgTempContainer, avgVisContainer, uvIndexContainer);
}


function hourlyForecastLayout(weatherData){
    const hourlyForecastContainer = document.querySelector('.hourlyForecast');
    const title = document.createElement('h2');
    title.textContent = 'Hourly Forecast';
    hourlyForecastContainer.append(title);
    const currentDayhourlyForecastData = weatherData.forecast.forecastday[0].hour;

    for(let hourIndex = 0; hourIndex < currentDayhourlyForecastData.length; hourIndex++){
        const subHourlyContainer = document.createElement('div');
        subHourlyContainer.classList.add('subHourlyContainer');

        const time = document.createElement('p');
        time.textContent = format(new Date(currentDayhourlyForecastData[hourIndex].time), "h:mm a");

        const icon = document.createElement('img');
        icon.src = currentDayhourlyForecastData[hourIndex].condition.icon;
        
        const WeatherText = document.createElement('p');
        WeatherText.textContent = currentDayhourlyForecastData[hourIndex].condition.text;

        const temp = document.createElement('p');
        temp.textContent = currentDayhourlyForecastData[hourIndex].temp_f + '°F';

        subHourlyContainer.append(time, icon, WeatherText, temp);
        hourlyForecastContainer.append(subHourlyContainer);
    }
}

function contentLayout(weatherData){
    currentWeatherDataLayout(weatherData);
    currentWeatherDetailsLayout(weatherData);
    twoDaysForecastLayout(weatherData);
    hourlyForecastLayout(weatherData);
}
export default contentLayout;