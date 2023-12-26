function getInnerCabDimensions(type, overallWidth, overallDepth) {
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

    innerWidth = overallWidth - widthWallThickness;
    innerDepth = overallDepth - depthWallThickness;

    return {
        innerWidth: innerWidth,
        innerHeight: innerDepth,
    }
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

function getOverhead(door, cabHeight) {
    if (door == 'bifold' || door == 'accordion') {
        if (cabHeight == 2133.6) { //84"
            return 2438.4; //96"
        } else if (cabHeight == 2438.4) { //96"
            return 2743.2; //108"
        }

    } else {
        return 2743.2; //108"
    }
}

function getPitDepth(door){
    if (door == '2speed' || door == '3speed'){
        return 304.8; //12"
    }
    else {
        return 203.2; //8"
    }
}

function getOverallDimensions(model,type, hoistwayWidth, hoistwayDepth){
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
        overallWidth = hoistwayWidth - distanceToBackOfControlWall - otherClearance;
        overallDepth = hoistwayDepth - runningClearance - otherClearance;
    }
    else if (type == 'B') {
        overallWidth = hoistwayWidth - distanceToBackOfControlWall - otherClearance;
        overallDepth = hoistwayDepth - runningClearance - runningClearance;
    }
    else if (type == 'C') {
        overallWidth = hoistwayWidth - distanceToBackOfControlWall - runningClearance;
        overallDepth = hoistwayDepth - runningClearance - otherClearance;
    }
    else if (type == 'D') {
        overallWidth = hoistwayWidth - distanceToBackOfControlWall - runningClearance;
        overallDepth = hoistwayDepth - runningClearance - otherClearance;
    }
    else if (type == 'E') {
        overallWidth = hoistwayWidth - distanceToBackOfControlWall - runningClearance;
        overallDepth = hoistwayDepth - otherClearance - otherClearance;
    }
    else {
        console.log('error');
        console.log(type);
        console.log(model);
    }

    return {
        overallWidth: overallWidth,
        overallDepth: overallDepth,
    }
}