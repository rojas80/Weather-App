const { toDate, format, parse } = require("date-fns");

function currentWeatherDataLayout(weatherData){
    const currentWeatherContainer = document.querySelector('.currentWeatherContainer');
    const dataContainer = document.createElement('div');
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
    dataContainer.append(presentDate,locationName, condition, currentTemp);

    iconContainer.append(icon);

    currentWeatherContainer.append(dataContainer,iconContainer);
}
// update the date formate
function twoDaysForecastLayout(weatherData){
    const twoDaysForecastContainer = document.querySelector('.twoDaysForecastContainer');
    const title = document.createElement('h2');
    title.textContent = '2-DAY FORECAST';

    const daysForecastContainer = document.createElement('div');
    daysForecastContainer.classList.add('daysForecastContainer');
    
    const forecastData =  weatherData.forecast.forecastday;
    twoDaysForecastContainer.append(title);

    for(let daysIndex = 1; daysIndex < forecastData.length; daysIndex++){
        const daysForecastContainer = document.createElement('div');
        daysForecastContainer.classList.add('daysForecastContainer');

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



        const formattedDate = format(new Date(forecastData[daysIndex].date), "EEE MMM dd");
        forecastDate.textContent = formattedDate;

        subForecastContainer.append(forecastIcon, forecastAvgTemp, forecastText, maxMInTemp, forecastDate);
        daysForecastContainer.append(subForecastContainer);
        twoDaysForecastContainer.append(daysForecastContainer);
    }
}


function currentWeatherDetailsLayout(weatherData){
    const currentDetails = document.querySelector('.currentDetails');

    const feelsLikeText = document.createElement('p');
    feelsLikeText.textContent = 'Feels like ' + weatherData.current.feelslike_f + '°F';

    const sunRise = document.createElement('p');
    sunRise.textContent = 'Sunrise ' + weatherData.forecast.forecastday[0].astro.sunrise;

    const sunSet = document.createElement('p');
    sunSet.textContent = 'Sunset ' + weatherData.forecast.forecastday[0].astro.sunset;

    const maxTemp = document.createElement('p');
    maxTemp.textContent = 'Max Temp ' + weatherData.forecast.forecastday[0].day.maxtemp_f + '°F';

    const minTemp = document.createElement('p');
    minTemp.textContent = 'Min Temp ' + weatherData.forecast.forecastday[0].day.mintemp_f + '°F';

    const chanceOfRain = document.createElement('p');
    chanceOfRain.textContent = 'Chance Of Rain ' + weatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%';

    const avgTemp = document.createElement('p');
    avgTemp.textContent = 'Avg Temp ' + weatherData.forecast.forecastday[0].day.avgtemp_f + '°F';

    const avgVis = document.createElement('p');
    avgVis.textContent = 'Visibility ' + weatherData.forecast.forecastday[0].day.avgvis_miles + ' mph';

    currentDetails.append(feelsLikeText, sunRise, sunSet, maxTemp, minTemp, chanceOfRain, avgTemp, avgVis);
}


function hourlyForecastLayout(weatherData){
    const hourlyForecastContainer = document.querySelector('.hourlyForecast');
    const title = document.createElement('h2');
    title.textContent = 'Hourly Forecast';
    hourlyForecastContainer.append(title);
    const currentDayhourlyForecastData = weatherData.forecast.forecastday[0].hour;
    /////////////////////
    console.log(currentDayhourlyForecastData);
    const parsedDate = parse('2024-02-13 22:00', 'yyyy-MM-dd HH:mm', new Date());
    const formattedDate = format(parsedDate, 'E MMM d');

    const result2 = format(new Date('2024-02-13 22:00'), "h:mm a");//format(new Date(2024,2,13,19,'h'));
    console.log(formattedDate);
    console.log(result2);
    ///////////////////////
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