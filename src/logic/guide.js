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