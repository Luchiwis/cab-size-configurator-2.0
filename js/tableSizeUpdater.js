const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');
const hoistwayWidthTableLabel = document.getElementById('hoistway-width-table-label');
const hoistwayDepthTableLabel = document.getElementById('hoistway-depth-table-label');
const table = document.getElementById('table');

function updateTable() {

    cabWidth = document.getElementById('cab-width');
    cabDepth = document.getElementById('cab-depth');

    cabWidthValue = parseFloat(cabWidth.value);
    cabDepthValue = parseFloat(cabDepth.value);

    const type = elevatorData['type'];
    const model = elevatorData['model'];

    //starting calculations

    // overall
    if (UNITS == 'mm') {
        cabWidthValue = millimetersToInches(cabWidthValue);
        cabDepthValue = millimetersToInches(cabDepthValue);
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
    if ((!cabWidthValue || !cabDepthValue)) {
        innerWidthTableLabel.innerHTML = '-';
        innerDepthTableLabel.innerHTML = '-';
        overallWidthTableLabel.innerHTML = '-';
        overallDepthTableLabel.innerHTML = '-';
        hoistwayWidthTableLabel.innerHTML = '-';
        hoistwayDepthTableLabel.innerHTML = '-';
        return
    }
    if (cabWidthValue>Number(cabWidth.max) || cabWidthValue<Number(cabWidth.min)) {
        innerWidthTableLabel.innerHTML = '-';
        overallWidthTableLabel.innerHTML = '-';
        hoistwayWidthTableLabel.innerHTML = '-';
        return
    }
    if (cabDepthValue>Number(cabDepth.max) || cabDepthValue<Number(cabDepth.min)) {
        innerDepthTableLabel.innerHTML = '-';
        overallDepthTableLabel.innerHTML = '-';
        hoistwayDepthTableLabel.innerHTML = '-';
        return
    }

    if (UNITS == 'mm') {

        //inner
        innerWidth = inchesToMillimeters(innerWidth).toFixed(2) + 'mm';
        innerDepth = inchesToMillimeters(innerDepth).toFixed(2) + 'mm';

        //overall
        overallWidth = inchesToMillimeters(overallWidth).toFixed(2) + 'mm';
        overallDepth = inchesToMillimeters(overallDepth).toFixed(2) + 'mm';

        //hoistway
        hoistwayWidth = inchesToMillimeters(hoistwayWidth).toFixed(2) + 'mm';
        hoistwayDepth = inchesToMillimeters(hoistwayDepth).toFixed(2) + 'mm';
    }
    else {
        //inner
        innerWidth = innerWidth + '"';
        innerDepth = innerDepth + '"';

        //overall
        overallWidth = overallWidth + '"';
        overallDepth = overallDepth + '"';

        //hoistway
        hoistwayWidth = hoistwayWidth + '"';
        hoistwayDepth = hoistwayDepth + '"';
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