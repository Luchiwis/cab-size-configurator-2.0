const MM_WALL_THICKNESS = 38.1;

const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');
const hoistwayWidthTableLabel = document.getElementById('hoistway-width-table-label');
const hoistwayDepthTableLabel = document.getElementById('hoistway-depth-table-label');

function setWallThicknesses(type) {
    if (type == 'A') {
        widthWallThickness = MM_WALL_THICKNESS * 2;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'B') {
        widthWallThickness = MM_WALL_THICKNESS * 2;
        depthWallThickness = 0;
    }
    else if (type == 'C') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'D') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'E') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS * 2;
    }

    //change global variables
    MM_WIDTH_WALL_THICKNESS = widthWallThickness;
    MM_DEPTH_WALL_THICKNESS = depthWallThickness;
}

function getHoistwayDimensions(type, model, overallWidth, overallDepth) {
    if (model == 'panorama' || model == 'renaissance') {
        runningClearance = inchesToMillimeters(1.25);
        otherClearance = inchesToMillimeters(2.5);
        if (type == 'A' || type == 'B') {
            distanceToBackOfControlWall = inchesToMillimeters(10);
        }
        else if (type == 'C' || type == 'D' || type == 'E') {
            distanceToBackOfControlWall = inchesToMillimeters(10.75);
        }
    }
    else if (model == 'legacy') {
        runningClearance = inchesToMillimeters(1.25);
        otherClearance = inchesToMillimeters(2.25);
        distanceToBackOfControlWall = inchesToMillimeters(10.75);
    }

    if (type == 'A') {
        hoistwayWidth = distanceToBackOfControlWall + overallWidth + otherClearance;
        hoistwayDepth = runningClearance + overallDepth + otherClearance;
    }
    else if (type == 'B') {
        hoistwayWidth = distanceToBackOfControlWall + overallWidth + otherClearance;
        hoistwayDepth = runningClearance + overallDepth + runningClearance;
    }
    else if (type == 'C') {
        hoistwayWidth = distanceToBackOfControlWall + overallWidth + runningClearance;
        hoistwayDepth = runningClearance + overallDepth + otherClearance;
    } 
    else if (type == 'D') {
        hoistwayWidth = distanceToBackOfControlWall + overallWidth + runningClearance;
        hoistwayDepth = runningClearance + overallDepth + otherClearance;
    }
    else if (type == 'E') {
        hoistwayWidth = distanceToBackOfControlWall + overallWidth + runningClearance;
        hoistwayDepth = otherClearance + overallDepth + otherClearance;
    }

    return {
        runningClearance: runningClearance,
        otherClearance: otherClearance,
        distanceToBackOfControlWall: distanceToBackOfControlWall,
        hoistwayWidth: hoistwayWidth,
        hoistwayDepth: hoistwayDepth,
    }
}

function updateTable(){
    innerCabWidthValue = parseFloat(document.getElementById('inner-width').value);
    innerCabDepthValue = parseFloat(document.getElementById('inner-depth').value);

    const type = elevatorData['type'];
    const model = elevatorData['model'];

    //starting calculations

    if (UNITS == 'in') {
        innerCabWidthValue = inchesToMillimeters(innerCabWidthValue);
        innerCabDepthValue = inchesToMillimeters(innerCabDepthValue);
    }

    overallWidth = innerCabWidthValue + MM_WIDTH_WALL_THICKNESS;
    overallDepth = innerCabDepthValue + MM_DEPTH_WALL_THICKNESS;

    hoistwayDimensions = getHoistwayDimensions(type, model, overallWidth, overallDepth);
    hoistwayWidth = hoistwayDimensions.hoistwayWidth;
    hoistwayDepth = hoistwayDimensions.hoistwayDepth;



    //display results
    if (!innerCabWidthValue || !innerCabDepthValue) {
        innerWidthTableLabel.innerHTML = '-';
        innerDepthTableLabel.innerHTML = '-';
        overallWidthTableLabel.innerHTML = '-';
        overallDepthTableLabel.innerHTML = '-';
        hoistwayWidthTableLabel.innerHTML = '-';
        hoistwayDepthTableLabel.innerHTML = '-';
        return
    }
    
    if (UNITS == 'in') {

        //inner
        innerWidthTableLabel.innerHTML = Math.round(millimetersToInches(innerCabWidthValue)) + '"';
        innerDepthTableLabel.innerHTML = Math.round(millimetersToInches(innerCabDepthValue)) + '"';

        //overall
        overallWidthTableLabel.innerHTML = millimetersToInches(overallWidth).toFixed(2) + '"';
        overallDepthTableLabel.innerHTML = millimetersToInches(overallDepth).toFixed(2) + '"';

        //hoistway
        hoistwayWidthTableLabel.innerHTML = millimetersToInches(hoistwayWidth).toFixed(2) + '"';
        hoistwayDepthTableLabel.innerHTML = millimetersToInches(hoistwayDepth).toFixed(2) + '"';
    }
    else {

        //inner
        innerWidthTableLabel.innerHTML = innerCabWidthValue + 'mm';
        innerDepthTableLabel.innerHTML = innerCabDepthValue + 'mm';

        //overall
        overallWidthTableLabel.innerHTML = overallWidth + 'mm';
        overallDepthTableLabel.innerHTML = overallDepth + 'mm';

        //hoistway
        hoistwayWidthTableLabel.innerHTML = 'TODO' + 'mm';
        hoistwayDepthTableLabel.innerHTML = 'TODO' + 'mm';
    }

}


inputs = document.querySelectorAll('input[type="number"]');
for (input of inputs) {
    input.addEventListener('input', updateTable);
}