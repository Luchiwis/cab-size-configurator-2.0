const MM_WALL_THICKNESS = 38.1;

const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');
const hoistwayWidthTableLabel = document.getElementById('hoistway-width-table-label');
const hoistwayDepthTableLabel = document.getElementById('hoistway-depth-table-label');

function updateTable(){
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
        innerWidthTableLabel.innerHTML = millimetersToInches(innerWidth).toFixed(2) + '"';
        innerDepthTableLabel.innerHTML = millimetersToInches(innerDepth).toFixed(2) + '"';

        //overall
        overallWidthTableLabel.innerHTML = millimetersToInches(overallWidth).toFixed(2) + '"';
        overallDepthTableLabel.innerHTML = millimetersToInches(overallDepth).toFixed(2) + '"';

        //hoistway
        hoistwayWidthTableLabel.innerHTML = millimetersToInches(hoistwayWidth).toFixed(2) + '"';
        hoistwayDepthTableLabel.innerHTML = millimetersToInches(hoistwayDepth).toFixed(2) + '"';
    }
    else {

        //inner
        innerWidthTableLabel.innerHTML = innerWidth + 'mm';
        innerDepthTableLabel.innerHTML = innerDepth + 'mm';

        //overall
        overallWidthTableLabel.innerHTML = overallWidth + 'mm';
        overallDepthTableLabel.innerHTML = overallDepth + 'mm';

        //hoistway
        hoistwayWidthTableLabel.innerHTML = hoistwayWidth + 'mm';
        hoistwayDepthTableLabel.innerHTML = hoistwayDepth + 'mm';
    }

}


inputs = document.querySelectorAll('input[type="number"]');
for (input of inputs) {
    input.addEventListener('input', updateTable);
}