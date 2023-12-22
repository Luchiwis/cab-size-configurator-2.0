const MM_WALL_THICKNESS = 38.1;

const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');
const hoistwayWidthTableLabel = document.getElementById('hoistway-width-table-label');
const hoistwayDepthTableLabel = document.getElementById('hoistway-depth-table-label');

function updateTable() {
    cabWidthValue = parseFloat(document.getElementById('cab-width').value);
    cabDepthValue = parseFloat(document.getElementById('cab-depth').value);

    const type = elevatorData['type'];
    const model = elevatorData['model'];

    //starting calculations


    // overall
    if (UNITS == 'in') {
        cabWidthValue = inchesToMillimeters(cabWidthValue);
        cabDepthValue = inchesToMillimeters(cabDepthValue);
    }

    overallWidth = cabWidthValue;
    overallDepth = cabDepthValue;

    hoistwayDimensions = getHoistwayDimensions(type, model, overallWidth, overallDepth);
    hoistwayWidth = hoistwayDimensions.hoistwayWidth;
    hoistwayDepth = hoistwayDimensions.hoistwayDepth;

    innerCabDimensions = getInnerCabDimensions(type, overallWidth, overallDepth);
    innerWidth = innerCabDimensions.innerWidth;
    innerDepth = innerCabDimensions.innerHeight;

    //save values to elevatorData
    elevatorData['innerWidth'] = innerWidth;
    elevatorData['innerDepth'] = innerDepth;
    elevatorData['overallWidth'] = overallWidth;
    elevatorData['overallDepth'] = overallDepth;
    elevatorData['hoistwayWidth'] = hoistwayWidth;
    elevatorData['hoistwayDepth'] = hoistwayDepth;

    //display results
    if (!cabWidthValue || !cabDepthValue) {
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
        innerWidth = millimetersToInches(innerWidth).toFixed(2) + '"';
        innerDepth = millimetersToInches(innerDepth).toFixed(2) + '"';

        //overall
        overallWidth = millimetersToInches(overallWidth).toFixed(2) + '"';
        overallDepth = millimetersToInches(overallDepth).toFixed(2) + '"';

        //hoistway
        hoistwayWidth = millimetersToInches(hoistwayWidth).toFixed(2) + '"';
        hoistwayDepth = millimetersToInches(hoistwayDepth).toFixed(2) + '"';
    }
    else {

        //inner
        innerWidth = innerWidth + 'mm';
        innerDepth = innerDepth + 'mm';

        //overall
        overallWidth = overallWidth + 'mm';
        overallDepth = overallDepth + 'mm';

        //hoistway
        hoistwayWidth = hoistwayWidth + 'mm';
        hoistwayDepth = hoistwayDepth + 'mm';
    }

    //inner
    innerWidthTableLabel.innerHTML = innerWidth
    innerDepthTableLabel.innerHTML = innerDepth
    //overall
    overallWidthTableLabel.innerHTML = overallWidth
    overallDepthTableLabel.innerHTML = overallDepth
    //hoistway
    hoistwayWidthTableLabel.innerHTML = hoistwayWidth
    hoistwayDepthTableLabel.innerHTML = hoistwayDepth


}


inputs = document.querySelectorAll('input[type="number"]');
for (input of inputs) {
    input.addEventListener('input', updateTable);
}