
function errorLayout(error){
    const errorMessageContainer = document.querySelector('.errorContainer');
    errorMessageContainer.style.display = 'block';
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error.error.message;
    errorMessageContainer.append(errorMessage);
}

export default errorLayout;