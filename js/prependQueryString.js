urlproperties = document.querySelector('#urlproperties');

elevatorData = {

}

function translateParam(param) {
    switch (param) {
        case 'model':
            return 'Model';
        case 'type':
            return 'Type';
        case 'door':
            return 'Door';
        case 'landing':
            return 'Landing';
        case 'panorama':
            return 'Panorama';
        case 'renaissance':
            return 'Renaissance';
        case 'legacy':
            return 'Legacy Volt';
        case 'on':
            return 'Yes';
        case 'off':
            return 'No';
        case '2speed':
            return '2 Speed sliding';
        case '1speed':
            return '1 Speed sliding';
        default:
            return param;
    }
}

// Get the form element
var form = document.querySelector('form');

//get url params
const urlParams = new URLSearchParams(window.location.search);

//get all params
params = urlParams.entries();
params = Array.from(params)
params.reverse();

function addHiddenInput(name, value, pend = 'prepend') {
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'hidden');
    newInput.setAttribute('name', name);
    newInput.setAttribute('value', value);
    form.prepend(newInput);
}

//log all params
for (const param of params) {
    paramName = param[0];
    paramValue = param[1];

    elevatorData[paramName] = paramValue;

    addHiddenInput(paramName, paramValue);

    if (urlproperties){
        urlproperties.innerHTML = `<li class="mx-3">${translateParam(paramName)}:${translateParam(paramValue)}</li>` + urlproperties.innerHTML;
    }
}