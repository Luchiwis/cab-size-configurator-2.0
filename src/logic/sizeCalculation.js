import { WALL_THICKNESS } from './constants';
import { inchesToMillimeters, millimetersToInches } from './unitConversion';


export function innerDimensions(type, overallWidth, overallDepth, units = 'in') {
    /*
    inches function
    input: type, overallWidth, overallDepth
    output: {width: innerWidth, depth: innerDepth}
    */
    //conditional conversion
    if (units == 'mm') {
        overallWidth = millimetersToInches(overallWidth);
        overallDepth = millimetersToInches(overallDepth);
    }

    let widthWallThickness;
    let depthWallThickness;
    if (type == 'A') {
        widthWallThickness = WALL_THICKNESS * 2;
        depthWallThickness = WALL_THICKNESS;
    }
    else if (type == 'B') {
        widthWallThickness = WALL_THICKNESS * 2;
        depthWallThickness = 0;
    }
    else if (type == 'C') {
        widthWallThickness = WALL_THICKNESS;
        depthWallThickness = WALL_THICKNESS;
    }
    else if (type == 'D') {
        widthWallThickness = WALL_THICKNESS;
        depthWallThickness = WALL_THICKNESS;
    }
    else if (type == 'E') {
        widthWallThickness = WALL_THICKNESS;
        depthWallThickness = WALL_THICKNESS * 2;
    }



    //conditional conversion
    if (units == 'mm') {
        return {
            width: inchesToMillimeters(overallWidth - widthWallThickness).toFixed(),
            depth: inchesToMillimeters(overallDepth - depthWallThickness).toFixed()
        }
    } else {
        return {
            width: overallWidth - widthWallThickness,
            depth: overallDepth - depthWallThickness
        }
    }
}

export function hoistwayDimensions(type, model, overallWidth, overallDepth, units = 'in') {
    /*
    inches function
    input: type, model, overallWidth, overallDepth
    output: {width: hoistwayWidth, depth: hoistwayDepth, runningClearance: runningClearance, otherClearance: otherClearance, distanceToBackOfControlWall: distanceToBackOfControlWall}
    */
    // convert to number
    //conditional conversion
    if (units == 'mm') {
        overallWidth = millimetersToInches(overallWidth);
        overallDepth = millimetersToInches(overallDepth);
    }
    overallWidth = Number(overallWidth);
    overallDepth = Number(overallDepth);

    let runningClearance;
    let otherClearance;
    let distanceToBackOfControlWall;
    let hoistwayWidth;
    let hoistwayDepth;


    if (model == 'panorama' || model == 'renaissance') {
        runningClearance = 1.25;
        otherClearance = 2.5;
        if (type == 'A' || type == 'B') {
            distanceToBackOfControlWall = 10;
        }
        else if (type == 'C' || type == 'D' || type == 'E') {
            distanceToBackOfControlWall = 10.75;
        }
    }
    else if (model == 'legacy') {
        runningClearance = 1.25;
        otherClearance = 2.25;
        distanceToBackOfControlWall = 10.75;
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

    //conditional conversion
    if (units == 'mm') {
        return {
            width: inchesToMillimeters(hoistwayWidth).toFixed(),
            depth: inchesToMillimeters(hoistwayDepth).toFixed(),
            runningClearance: inchesToMillimeters(runningClearance),
            otherClearance: inchesToMillimeters(otherClearance),
            distanceToBackOfControlWall: inchesToMillimeters(distanceToBackOfControlWall),
        }
    } else {
        return {
            width: hoistwayWidth,
            depth: hoistwayDepth,
            runningClearance: runningClearance,
            otherClearance: otherClearance,
            distanceToBackOfControlWall: distanceToBackOfControlWall,
        }
    }
}

export function overall(model, type, hoistwayWidth, hoistwayDepth, units = 'in') {
    //
    //conditional conversion
    if (units == 'mm') {
        hoistwayWidth = millimetersToInches(hoistwayWidth);
        hoistwayDepth = millimetersToInches(hoistwayDepth);
    }

    let runningClearance;
    let otherClearance;
    let distanceToBackOfControlWall;
    let overallWidth;
    let overallDepth;
    if (model == 'panorama' || model == 'renaissance') {
        runningClearance = 1.25;
        otherClearance = 2.5;
        if (type == 'A' || type == 'B') {
            distanceToBackOfControlWall = 10;
        }
        else if (type == 'C' || type == 'D' || type == 'E') {
            distanceToBackOfControlWall = 10.75;
        }
    }
    else if (model == 'legacy') {
        runningClearance = 1.25;
        otherClearance = 2.25;
        distanceToBackOfControlWall = 10.75;
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
        console.log('error in calculation');
        console.log(type);
        console.log(model);
    }

    //conditional conversion
    if (units == 'mm') {
        return {
            width: inchesToMillimeters(overallWidth).toFixed(),
            depth: inchesToMillimeters(overallDepth).toFixed(),
        }
    } else {
        return {
            width: overallWidth,
            depth: overallDepth,
        }
    }
}

export function overhead(model, door, doorHeight, cabHeight) {
    if (model == 'legacy') {
        return 115; //115"
    }
    if (door == 'bifold' || door == 'accordion') {
        if (cabHeight == 84 && doorHeight==84) { //84"
            return 96; //96"
        } else if (cabHeight == 96 && doorHeight==84) { //96"
            return 103; //108"
        } else if (cabHeight == 96 && doorHeight==96) { //96"
            return 108; //108"
        }
    } else {
        return 108; //108"
    }
}

export function pitDepth(door) {


    if (door == '2speed' || door == '3speed') {
        return 12; //12"
    }
    else {
        return 8; //8"
    }
}

