function doorRestrictions() {
    //get url params
    // const urlParams = new URLSearchParams(window.location.search);
    // const type = urlParams.get('type');
    const type = elevatorData['type'];
    const model = elevatorData['model'];
    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

    //if type is C or D, disable slide2, slide3 and landing
    if (['C', 'D'].includes(type)) {
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('landing').disabled = true;

        errorBox.showError('2 and 3 speed sliding doors are not available for types C and D, consult factory for this properties.');
    }
    if (model == 'legacy') {
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('landing').disabled = true;

        errorBox.showError('2 and 3 speed sliding doors are not available for legacy models, consult factory for this properties.');
    }
    if (['C', 'D'].includes(type) && model == 'legacy') {
        console.log('both');
        document.getElementById('bifold').disabled = true;

        errorBox.showError('Bi-fold doors are not available for types C and D in lecagy model, consult factory for this properties.');
    }
}

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

    if (UNITS == 'in') {
        //min and max number inputs
        minCabWidth = millimetersToInches(ranges.minOverallWidth).toFixed(2);
        maxCabWidth = millimetersToInches(ranges.maxOverallWidth).toFixed(2);
        minCabDepth = millimetersToInches(ranges.minOverallDepth).toFixed(2);
        maxCabDepth = millimetersToInches(ranges.maxOverallDepth).toFixed(2);

        //min and max labels
        widthRangeLabel.innerHTML = minCabWidth + '" - ' + maxCabWidth + '"';
        depthRangeLabel.innerHTML = minCabDepth + '" - ' + maxCabDepth + '"';
    } else {
        //min and max number inputs
        minCabWidth = ranges.minOverallWidth;
        maxCabWidth = ranges.maxOverallWidth;
        minCabDepth = ranges.minOverallDepth;
        maxCabDepth = ranges.maxOverallDepth;

        //min and max labels
        widthRangeLabel.innerHTML = minCabWidth + 'mm - ' + maxCabWidth + 'mm';
        depthRangeLabel.innerHTML = minCabDepth + 'mm - ' + maxCabDepth + 'mm';

        //heigth options
        cabHeightOptions.forEach(option => {
            option.innerHTML = inchesToMillimeters(option.value).toFixed(1) + 'mm';
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

if (window.location.pathname.endsWith('/door.html')) {
    doorRestrictions();
}
else if (window.location.pathname.endsWith('/cab.html')) {
    cabRestrictions();
}
else if (window.location.pathname.endsWith('/model.html')) {
    modelRestrictions();
}
