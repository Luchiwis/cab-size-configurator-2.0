function filterHoistwayInRange(guide, hoistwayWidth, hoistwayDepth, model = null, type = null, door = null) {
    filter = guide
    if (!hoistwayWidth || !hoistwayDepth) return [];
    if (hoistwayWidth) {
        filter = filter.filter(obj => {
            return obj.minHoistwayWidth <= hoistwayWidth;// && obj.maxHoistwayWidth >= hoistwayWidth;
        }
        );
    }
    if (hoistwayDepth) {
        filter = filter.filter(obj => {
            return obj.minHoistwayDepth <= hoistwayDepth;// && obj.maxHoistwayDepth >= hoistwayDepth;
        }
        );
    }
    if (model) {
        filter = filter.filter(obj => {
            return obj.model == model;
        });
    }
    if (type) {
        filter = filter.filter(obj => {
            return obj.type == type;
        });
    }
    if (door) {
        filter = filter.filter(obj => {
            return obj.door == door;
        });
    }
    return filter;
}


function filterObjects(guide, filters) {
    return guide.filter(obj => {
        for (const key in filters) {
            if (filters[key] !== null && obj[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    });
}

function getRanges(objects) {
    //return minOverallWidth, maxOverallWidth, minOverallDepth, maxOverallDepth

    //get minOverallWidth
    const minOverallWidth = Math.min(...objects.map(obj => obj.minOverallWidth));
    const maxOverallWidth = Math.max(...objects.map(obj => obj.maxOverallWidth));
    const minOverallDepth = Math.min(...objects.map(obj => obj.minOverallDepth));
    const maxOverallDepth = Math.max(...objects.map(obj => obj.maxOverallDepth));
    const minHoistwayWidth = Math.min(...objects.map(obj => obj.minHoistwayWidth));
    const maxHoistwayWidth = Math.max(...objects.map(obj => obj.maxHoistwayWidth));
    const minHoistwayDepth = Math.min(...objects.map(obj => obj.minHoistwayDepth));
    const maxHoistwayDepth = Math.max(...objects.map(obj => obj.maxHoistwayDepth));

    return {
        minOverallWidth: minOverallWidth,
        maxOverallWidth: maxOverallWidth,
        minOverallDepth: minOverallDepth,
        maxOverallDepth: maxOverallDepth,
        minHoistwayWidth: minHoistwayWidth,
        maxHoistwayWidth: maxHoistwayWidth,
        minHoistwayDepth: minHoistwayDepth,
        maxHoistwayDepth: maxHoistwayDepth,
    }
}

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