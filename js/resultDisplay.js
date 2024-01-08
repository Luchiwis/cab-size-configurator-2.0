const modelLabel = document.getElementById("model");
const typeLabel = document.getElementById("type");
const doorLabel = document.getElementById("door");
const LandingLabel = document.getElementById("landing");
const overheadLabel = document.getElementById("overhead");
const heightLabel = document.getElementById("height");
const pitLabel = document.getElementById("pit-depth");

const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');
const hoistwayWidthTableLabel = document.getElementById('hoistway-width-table-label');
const hoistwayDepthTableLabel = document.getElementById('hoistway-depth-table-label');



function displayResults(){
    model = elevatorData['model'];
    type = elevatorData['type'];
    door = elevatorData['door'];
    if (Boolean(elevatorData['landing'])){ landing = 'Yes'; } else { landing = 'No'; };
    height = parseFloat(elevatorData['cab-height']);
    overhead = getOverhead(door, height);
    overallWidth = parseFloat(elevatorData['overall-width']);
    overallDepth = parseFloat(elevatorData['overall-depth']);
    hoistwayWidth = parseFloat(elevatorData['hoistway-width']);
    hoistwayDepth = parseFloat(elevatorData['hoistway-depth']);
    innerWidth = parseFloat(elevatorData['inner-width']);
    innerDepth = parseFloat(elevatorData['inner-depth']);
    pit = getPitDepth(door);
    if (UNITS == 'mm'){
        overhead = inchesToMillimeters(overhead).toFixed(0) + 'mm';
        height = inchesToMillimeters(height).toFixed(0) + 'mm';
        overallWidth = inchesToMillimeters(overallWidth).toFixed(2) + 'mm';
        overallDepth = inchesToMillimeters(overallDepth).toFixed(2) + 'mm';
        hoistwayWidth = inchesToMillimeters(hoistwayWidth).toFixed(2) + 'mm';
        hoistwayDepth = inchesToMillimeters(hoistwayDepth).toFixed(2) + 'mm';
        innerWidth = inchesToMillimeters(innerWidth).toFixed(2) + 'mm';
        innerDepth = inchesToMillimeters(innerDepth).toFixed(2) + 'mm';
        pit = inchesToMillimeters(pit).toFixed(0) + 'mm';
    }else if (UNITS == 'in'){
        overhead = overhead.toFixed() + 'in';
        height = height.toFixed() + 'in';
        overallWidth = overallWidth.toFixed() + 'in';
        overallDepth = overallDepth.toFixed() + 'in';
        hoistwayWidth = hoistwayWidth.toFixed() + 'in';
        hoistwayDepth = hoistwayDepth.toFixed() + 'in';
        innerWidth = innerWidth.toFixed() + 'in';
        innerDepth = innerDepth.toFixed() + 'in';
        pit = pit.toFixed() + 'in';
    }
    modelLabel.innerHTML = model;
    typeLabel.innerHTML = type;
    doorLabel.innerHTML = door;
    LandingLabel.innerHTML = landing;
    overheadLabel.innerHTML = overhead;
    heightLabel.innerHTML = height;
    pitLabel.innerHTML = pit;
    innerWidthTableLabel.innerHTML = innerWidth;
    innerDepthTableLabel.innerHTML = innerDepth;
    overallWidthTableLabel.innerHTML = overallWidth;
    overallDepthTableLabel.innerHTML = overallDepth;
    hoistwayWidthTableLabel.innerHTML = hoistwayWidth;
    hoistwayDepthTableLabel.innerHTML = hoistwayDepth;
}


displayResults();