

function getDoorTypes(guide) {
    return [...new Set(guide.map(obj => obj.door))];
}

function getTypes(guide) {
    return [...new Set(guide.map(obj => obj.type))];
}

/*
const filters = {
    door: '2speed',
    landing: false
}

  
const filteredResult = filterObjects(guide, filters);
console.log(getRanges(filteredResult).minOverallWidth);
*/