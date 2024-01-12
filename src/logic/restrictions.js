

function cabRestrictions() {
    filter = {
        model: model,
        type: type,
        door: door,
        landing: Boolean(landing),
    }
    objects = filterObjects(guide, filter);
    ranges = getRanges(objects);


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