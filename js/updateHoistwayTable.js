const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');

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

function updateTable(hoistwayWidth, hoistwayDepth) {
    if (UNITS == 'in') {
        hoistwayWidth = inchesToMillimeters(hoistwayWidth);
        hoistwayDepth = inchesToMillimeters(hoistwayDepth);
    }
    //filter the elevators that can fit in the hoistway from guide array
    filteredGuide = filterHoistwayInRange(guide, hoistwayWidth, hoistwayDepth);
    //clear the table
    tableBody.innerHTML = '';
    //add the filtered elevators to the table
    if (UNITS == 'in') {
        filteredGuide.forEach(elevator => {
            cab = getOverallDimensions(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
            overallWidth = millimetersToInches(cab.overallWidth).toFixed(2)+ '"';
            overallDepth = millimetersToInches(cab.overallDepth).toFixed(2)+ '"';
            addElevatorRow(elevator.model, elevator.type, elevator.door, elevator.landing, overallWidth, overallDepth);
        });
    } else if (UNITS == 'mm') {
        filteredGuide.forEach(elevator => {
            cab = getOverallDimensions(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
            overallWidth = cab.overallWidth + 'mm';
            overallDepth = cab.overallDepth + 'mm';
            addElevatorRow(elevator.model, elevator.type, elevator.door, elevator.landing, overallWidth, overallDepth);
        });
    }
}

function changeUnitsInputs() {
    widthInput.value = '';
    depthInput.value = '';
    if (UNITS == 'in') {
        widthLabel.innerHTML = '(49.5"-50.5")';
        depthLabel.innerHTML = '(50.25"-55")';
    } else if (UNITS == 'mm') {
        widthLabel.innerHTML = '(1257mm-1283mm)';
        depthLabel.innerHTML = '(1276mm-1397mm)';
    }
    updateTable(parseFloat(widthInput.value), parseFloat(depthInput.value));
}

//event listeners
widthInput.addEventListener('input', (e) => {
    updateTable(e.target.value, depthInput.value);
});
depthInput.addEventListener('input', (e) => {
    updateTable(widthInput.value, e.target.value);
});