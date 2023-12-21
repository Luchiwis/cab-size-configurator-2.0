// Function to add query string parameters to the form in the order they appear in the URL

// Get the form element
var form = document.querySelector('form');

//get url params
const urlParams = new URLSearchParams(window.location.search);

//get all params
params = urlParams.entries();
params = Array.from(params)
params.reverse();

//log all params
for (const param of params) {
    paramName = param[0];
    paramValue = param[1];

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'hidden');
    newInput.setAttribute('name', paramName);
    newInput.setAttribute('value', paramValue);
    document.querySelector('form').prepend(newInput);
}