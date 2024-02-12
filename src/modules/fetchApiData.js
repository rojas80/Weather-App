function createSearchUrlApi(userInput){
    userInput = userInput.trim();
    const constUrl = 'https://api.weatherapi.com/v1/forecast.json';
    const apiKey = '?key=e44a69423ce9419fbb082412241002'; 
    let newURLSearch = `${constUrl}${apiKey}&q=${userInput}&days=3`;
    return newURLSearch;
}

async function fetchApiData(url = 'https://api.weatherapi.com/v1/forecast.json?key=e44a69423ce9419fbb082412241002&q=los angeles&days=3'){
    try {
        let response = await fetch(url);
        let weatherData = await response.json();
        if(!response.ok){
            console.log("Red");
        }
        return weatherData; 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export  {fetchApiData, createSearchUrlApi};
//export default fetchApiData;