import {fetchApiData, createSearchUrlApi} from "../modules/fetchApiData";
import contentLayout from "./contentLayout";
//import fetchApiData from "../modules/fetchApiData";

async function sendNewApiRequest(searchInput){
    let newUrlApi = createSearchUrlApi(searchInput);
    let weatherData = await fetchApiData(newUrlApi);
    console.log(weatherData);
    return weatherData;
}
function updateLocation(weatherData){
    const currentLocationName = document.querySelector('.locationName');
    currentLocationName.textContent = '';
    currentLocationName.textContent = weatherData.location.name + ', '+ weatherData.location.region;
}
function headerLayout(weatherData){
    const header = document.querySelector('.appHeader');
    const title = document.createElement('h1');
    title.textContent ='Weather';
    const currentLocationName = document.createElement('p');
    currentLocationName.className = 'locationName';
    currentLocationName.textContent = weatherData.location.name + ', '+ weatherData.location.region;

    const searchBarContainer = document.createElement('div');

    const searchInput = document.createElement('input');
    searchInput.placeholder = ' City or Zip Code'
    searchInput.classList.add('userSearchInput');
    const searchBtn = document.createElement('button');
    searchBtn.textContent = 'SEARCH';

    searchBtn.addEventListener('click', async () =>{
        let newWeatherData = await sendNewApiRequest(searchInput.value)
        clearContent();
        updateLocation(newWeatherData);
        updateLayoutData(newWeatherData);
    });
    searchBarContainer.append(searchInput, searchBtn);
    header.append(title, currentLocationName, searchBarContainer);
}
function clearContent(){
    let currentWeatherContainer = document.querySelector('.currentWeatherContainer');
    currentWeatherContainer.textContent = '';
    let currentDetails = document.querySelector('.currentDetails');
    currentDetails.textContent = '';
    let twoDaysForecastContainer = document.querySelector('.twoDaysForecastContainer');
    twoDaysForecastContainer.textContent = '';
    let hourlyForecast = document.querySelector('.hourlyForecast');
    hourlyForecast.textContent = '';
}

function updateLayoutData(weatherData){
    contentLayout(weatherData);
}


export default headerLayout;