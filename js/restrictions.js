
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
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const door = urlParams.get('door');
    const landing = urlParams.get('landing');

    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

    filter = {
        type: type,
        door: door,
        landing: Boolean(landing),
    }
    objects = filterObjects(guide, filter);
    ranges = getRanges(objects);

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

    rangeInnerWidth.min = ranges.minOverallWidth - widthWallThickness;
    rangeInnerWidth.max = ranges.maxOverallWidth - widthWallThickness;
    rangeInnerDepth.min = ranges.minOverallDepth - depthWallThickness;
    rangeInnerDepth.max = ranges.maxOverallDepth - depthWallThickness;
    rangeInnerWidth.value = ranges.minOverallWidth - widthWallThickness;
    rangeInnerDepth.value = ranges.minOverallDepth - depthWallThickness;
}

function modelRestrictions() {
    //get url params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const door = urlParams.get('door');
    const landing = urlParams.get('landing');
    const innerWidth = urlParams.get('innerWidth');
    const innerDepth = urlParams.get('innerDepth');

    const restrictions = document.getElementById('restrictions');
    const advise = document.getElementById('advise');

    //if type is C or D and door is bifold: disable legacy model
    //if door is 2speed or 3speed: disable legacy model


    if (['C', 'D'].includes(type) && door == 'bifold') {
        document.getElementById('legacy').disabled = true;
        advise.innerHTML += 'Legacy model is not available for types C and D with bifold doors, consult an engineer for this properties.'
        restrictions.classList.remove('d-none');
    }
    if (['2speed', '3speed'].includes(door)) {
        document.getElementById('legacy').disabled = true;
        advise.innerHTML += 'Legacy model is not available for 2 and 3 speed doors, consult an engineer for this properties.'
        restrictions.classList.remove('d-none');
    }

    //find avaliable models based on innerWidth and innerDepth
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
