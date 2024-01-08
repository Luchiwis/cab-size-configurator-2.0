const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const modelInput = document.getElementById('model');
const typeInput = document.getElementById('type');
const doorInput = document.getElementById('door');

const widthLabel = document.getElementById('width-label');
const depthLabel = document.getElementById('depth-label');

const tableBody = document.querySelector('tbody');


function addElevatorRow(model, type, door, landing, maxWidth, maxDepth) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${model}</td>
        <td>${type}</td>
        <td>${door}</td>
        <td>${landing}</td>
        <td>${maxWidth}</td>
        <td>${maxDepth}</td>
    `;
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
        widthLabel.innerHTML = 'min:49.5"';
        depthLabel.innerHTML = 'min:50.25"';
    } else if (UNITS == 'mm') {
        widthLabel.innerHTML = 'min:1257mm';
        depthLabel.innerHTML = 'min:1276mm';
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
