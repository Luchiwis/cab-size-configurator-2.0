const doors = {
    'accordion': 'Accordion',
    'bifold': 'Bi-Fold',
    '3speed': '3 Speed sliding',
    '2speed': '2 Speed sliding',
}
const models = {
    'legacy': 'Legacy',
    'panorama': 'Panorama',
    'renaissance': 'Renaissance',
}

const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const modelInput = document.getElementById('model');
const typeInput = document.getElementById('type');
const doorInput = document.getElementById('door');

const widthLabel = document.getElementById('width-label');
const depthLabel = document.getElementById('depth-label');

const tableBody = document.querySelector('tbody');


function addElevatorRow(model, type, door, landing, maxWidth, maxDepth) {
    resultUrl = `cab.html?&model=${model}&type=${type}&door=${door}`
    if (landing ) {resultUrl += '&landing=on'}
    model = models[model];
    type = type.toUpperCase();
    door = doors[door];
    (Boolean(landing)) ? landing = 'Yes' : landing = 'No';
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${model}</td>
        <td>${type}</td>
        <td>${door}</td>
        <td>${landing}</td>
        <td>${maxWidth}</td>
        <td>${maxDepth}</td>
    `;
    row.setAttribute('onclick', `window.location='${resultUrl}';`)
    tableBody.appendChild(row);
}

function updateTable() {
    hoistwayWidth = widthInput.value
    hoistwayDepth = depthInput.value
    model = modelInput.value 
    type = typeInput.value
    door = doorInput.value

    console.log(model, type, door)

    if (UNITS == 'mm') {
        hoistwayWidth = millimetersToInches(hoistwayWidth);
        hoistwayDepth = millimetersToInches(hoistwayDepth);
    }
    //filter the elevators that can fit in the hoistway from guide array
    filteredGuide = filterHoistwayInRange(guide, hoistwayWidth, hoistwayDepth, model, type, door);
    //clear the table
    tableBody.innerHTML = '';
    //add the filtered elevators to the table
    if (UNITS == 'mm') {
        filteredGuide.forEach(elevator => {
            cab = getOverallDimensions(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
            overallWidth = inchesToMillimeters(cab.overallWidth).toFixed(2)+ 'mm';
            overallDepth = inchesToMillimeters(cab.overallDepth).toFixed(2)+ 'mm';
            addElevatorRow(elevator.model, elevator.type, elevator.door, elevator.landing, overallWidth, overallDepth);
        });
    } else if (UNITS == 'in') {
        filteredGuide.forEach(elevator => {
            cab = getOverallDimensions(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
            overallWidth = cab.overallWidth + '"';
            overallDepth = cab.overallDepth + '"';
            addElevatorRow(elevator.model, elevator.type, elevator.door, elevator.landing, overallWidth, overallDepth);
        });
    }
}

function changeUnitsInputs() {
    widthInput.value = '';
    depthInput.value = '';
    if (UNITS == 'in') {
        widthLabel.innerHTML = 'min:49.5" | max:76.5"';
        depthLabel.innerHTML = 'min:50.25" | max:92.5"';
    } else if (UNITS == 'mm') {
        widthLabel.innerHTML = 'min:1270mm | max:1943mm';
        depthLabel.innerHTML = 'min:1283mm | max:2350mm';
    }
    updateTable(parseFloat(widthInput.value), parseFloat(depthInput.value));
}

//event listeners
widthInput.addEventListener('input', (e) => {
    updateTable();
});
depthInput.addEventListener('input', (e) => {
    updateTable();
});
modelInput.addEventListener('change', (e) => {
    updateTable();
}
);
typeInput.addEventListener('change', (e) => {
    updateTable();
}
);
doorInput.addEventListener('change', (e) => {
    updateTable();
}
);
