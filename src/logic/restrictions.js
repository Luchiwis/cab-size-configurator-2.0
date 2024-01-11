

function cabRestrictions() {
    const type = elevatorData['type'];
    const door = elevatorData['door'];
    const model = elevatorData['model'];
    const landing = elevatorData['landing'];
    const cabWidth = document.getElementById('cab-width');
    const cabDepth = document.getElementById('cab-depth');
    const cabHeight = document.getElementById('cab-height');
    const cabHeightOptions = cabHeight.querySelectorAll('option:not([disabled])');
    const widthRangeLabel = document.getElementById('width-range-label');
    const depthRangeLabel = document.getElementById('depth-range-label');

    filter = {
        model: model,
        type: type,
        door: door,
        landing: Boolean(landing),
    }
    objects = filterObjects(guide, filter);
    ranges = getRanges(objects);

    if (UNITS == 'mm') {
        //min and max number inputs
        minCabWidth = inchesToMillimeters(ranges.minOverallWidth).toFixed(2);
        maxCabWidth = inchesToMillimeters(ranges.maxOverallWidth).toFixed(2);
        minCabDepth = inchesToMillimeters(ranges.minOverallDepth).toFixed(2);
        maxCabDepth = inchesToMillimeters(ranges.maxOverallDepth).toFixed(2);

        //min and max labels
        widthRangeLabel.innerHTML = minCabWidth + 'mm - ' + maxCabWidth + 'mm';
        depthRangeLabel.innerHTML = minCabDepth + 'mm - ' + maxCabDepth + 'mm';

        //heigth options
        cabHeightOptions.forEach(option => {
            option.innerHTML = inchesToMillimeters(option.value).toFixed() + 'mm';
        });

    } else {
        //min and max number inputs
        minCabWidth = ranges.minOverallWidth;
        maxCabWidth = ranges.maxOverallWidth;
        minCabDepth = ranges.minOverallDepth;
        maxCabDepth = ranges.maxOverallDepth;

        //min and max labels
        widthRangeLabel.innerHTML = minCabWidth + '" - ' + maxCabWidth + '"';
        depthRangeLabel.innerHTML = minCabDepth + '" - ' + maxCabDepth + '"';

        //heigth options
        cabHeightOptions.forEach(option => {
            option.innerHTML = option.value + '"';
        });
    }

    cabWidth.min = minCabWidth;
    cabWidth.max = maxCabWidth;
    cabDepth.min = minCabDepth;
    cabDepth.max = maxCabDepth;

    //if there's no range complete with the only available value and disable the input
    if (ranges.minOverallWidth == ranges.maxOverallWidth) {
        cabWidth.value = minCabWidth;
        cabWidth.disabled = true;
    } else {
        cabWidth.value = "";
    }

    if (ranges.minOverallDepth == ranges.maxOverallDepth) {
        cabDepth.value = minCabDepth;
        cabDepth.disabled = true;
    } else {
        cabDepth.value = "";
    }


}