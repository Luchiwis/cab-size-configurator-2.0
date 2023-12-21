function doorRestrictions() {
    //get url params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

    //if type is C or D, disable slide2, slide3 and landing
    if (['C', 'D'].includes(type)) {
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('landing').disabled = true;

        advise.innerHTML = '2 and 3 speed sliding doors are not available for types C and D, consult an engineer for this properties.'
        restrictions.classList.remove('d-none');
    }
}

function innercabRestrictions() {
    //get url params
    // const urlParams = new URLSearchParams(window.location.search);
    // const type = urlParams.get('type');
    // const door = urlParams.get('door');
    const type = elevatorData['type'];
    const door = elevatorData['door'];
    const landing = urlParams.get('landing');
    const innerWidth = document.getElementById('inner-width');
    const innerDepth = document.getElementById('inner-depth');
    const widthRangeLabel = document.getElementById('width-range-label');
    const depthRangeLabel = document.getElementById('depth-range-label');

    filter = {
        type: type,
        door: door,
        landing: Boolean(landing),
    }
    objects = filterObjects(guide, filter);
    ranges = getRanges(objects);
    setWallThicknesses(type);

    if (UNITS == 'in') {
        innerWidth.min = millimetersToInches(ranges.minOverallWidth - MM_WIDTH_WALL_THICKNESS).toFixed(2);
        innerWidth.max = millimetersToInches(ranges.maxOverallWidth - MM_WIDTH_WALL_THICKNESS).toFixed(2);
        innerDepth.min = millimetersToInches(ranges.minOverallDepth - MM_DEPTH_WALL_THICKNESS).toFixed(2);
        innerDepth.max = millimetersToInches(ranges.maxOverallDepth - MM_DEPTH_WALL_THICKNESS).toFixed(2);

        widthRangeLabel.innerHTML = innerWidth.min + '" - ' + innerWidth.max + '"';
        depthRangeLabel.innerHTML = innerDepth.min + '" - ' + innerDepth.max + '"';
    }
    else {
        innerWidth.min = ranges.minOverallWidth - MM_WIDTH_WALL_THICKNESS;
        innerWidth.max = ranges.maxOverallWidth - MM_WIDTH_WALL_THICKNESS;
        innerDepth.min = ranges.minOverallDepth - MM_DEPTH_WALL_THICKNESS;
        innerDepth.max = ranges.maxOverallDepth - MM_DEPTH_WALL_THICKNESS;

        widthRangeLabel.innerHTML = innerWidth.min + 'mm - ' + innerWidth.max + 'mm';
        depthRangeLabel.innerHTML = innerDepth.min + 'mm - ' + innerDepth.max + 'mm';
    }
    innerWidth.value = "";
    innerDepth.value = "";

    
}

if (window.location.pathname.endsWith('/door.html')) {
    doorRestrictions();
}
else if (window.location.pathname.endsWith('/innercab.html')) {
    innercabRestrictions();
}
else if (window.location.pathname.endsWith('/model.html')) {
    modelRestrictions();
}
