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
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'City or Zip Code'
    searchInput.classList.add('userSearchInput');
    const searchBtn = document.createElement('button');

    searchBtn.addEventListener('click', async () =>{ 
        let newWeatherData = await sendNewApiRequest(searchInput.value)
        updateLocation(newWeatherData);
        updateLayoutData(newWeatherData);
    });

    searchBtn.textContent = 'SEARCH';
    header.append(title, currentLocationName, searchInput, searchBtn);
}

function updateLayoutData(weatherData){
    contentLayout(weatherData);
}


export default headerLayout;