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
    if (UNITS == 'in'){
        overhead = millimetersToInches(overhead).toFixed(0) + '"';
        height = millimetersToInches(height).toFixed(0) + '"';
        overallWidth = millimetersToInches(overallWidth).toFixed(2) + '"';
        overallDepth = millimetersToInches(overallDepth).toFixed(2) + '"';
        hoistwayWidth = millimetersToInches(hoistwayWidth).toFixed(2) + '"';
        hoistwayDepth = millimetersToInches(hoistwayDepth).toFixed(2) + '"';
        innerWidth = millimetersToInches(innerWidth).toFixed(2) + '"';
        innerDepth = millimetersToInches(innerDepth).toFixed(2) + '"';
        pit = millimetersToInches(pit).toFixed(0) + '"';
    }else if (UNITS == 'mm'){
        overhead = overhead.toFixed() + 'mm';
        height = height.toFixed() + 'mm';
        overallWidth = overallWidth.toFixed() + 'mm';
        overallDepth = overallDepth.toFixed() + 'mm';
        hoistwayWidth = hoistwayWidth.toFixed() + 'mm';
        hoistwayDepth = hoistwayDepth.toFixed() + 'mm';
        innerWidth = innerWidth.toFixed() + 'mm';
        innerDepth = innerDepth.toFixed() + 'mm';
        pit = pit.toFixed() + 'mm';
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