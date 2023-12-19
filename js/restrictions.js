// Replace 'output.json' with the path to your JSON file
const jsonFilePath = '../sizes/guide.json';
var jsondata;
// Fetch the JSON file

fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        // Use the 'data' object here
        jsondata = data.elevators;
    })
    .catch(error => console.error('Error fetching JSON:', error));


function doorRestrictions() {
    //get url params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

    //if type is C or D, disable slide2, slide3 and landing
    if (['C', 'D'].includes(type)) {
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('landing').disabled = true;

        advise.innerHTML = '2 and 3 speed sliding doors are not available for types C and D, consult an engineer for this properties.'
        restrictions.classList.remove('d-none');
    }
}


function innercabRestrictions() {
    //get url params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const door = urlParams.get('door');
    const landing = urlParams.get('landing');
    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

}

if (window.location.pathname == '/door.html') {
    doorRestrictions();
}
else if (window.location.pathname == '/innercab.html') {
}
else if (window.location.pathname == '/model.html') {
}