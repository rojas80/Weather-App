import styleSheet from '../src/stylesheet.css';
import gitHubLogo from '../src/images/GitHub_Logo.png'
import headerLayout from './components/headerLayout';
import { fetchApiData } from './modules/fetchApiData';
import contentLayout from './components/contentLayout';

let weatherData = await fetchApiData();


function footerLayout(){
    const footer = document.createElement('footer');
    const gitHubLink = document.createElement('a');
    gitHubLink.href = "https://github.com/rojas80";
    const gitHubImg = document.createElement('img');
    gitHubImg.classList.add('githublogo');
    gitHubImg.src = gitHubLogo;
    gitHubLink.appendChild(gitHubImg);
    footer.appendChild(gitHubLink);
    return footer;
}

function createDomElementsContainers(){
    const body = document.querySelector('body');
    const header =  document.createElement('header');
    header.classList.add('appHeader');
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('appMainContainer');
    const footer = document.createElement('footer');
    footer.classList.add('appFooter');
    body.append(header, mainContainer);
    body.appendChild(footerLayout());
}


function initializeApp(){
    createDomElementsContainers
    createDomElementsContainers();  
    headerLayout(weatherData);
    contentLayout(weatherData);
}

initializeApp();