UNITS = 'in';

function inchesToMillimeters(inches) {
    return inches * 25.4;
}

function millimetersToInches(millimeters) {
    return millimeters / 25.4;
}


function switchUnits(units) {
    UNITS = units;
    innercabRestrictions();
    updateTable();
}