import guide from  '../elevators/guide.json'

export function filterObjects(filters) {
    /*
    input: filters = {door: '2speed', landing: false}
    output: filteredResult = [{...}, {...}, {...}]
    */
    // copy filters
    filters = {...filters};
    return guide.filter(obj => {
        for (const key in filters) {
            if (filters[key] !== null && obj[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    });
}

export function getRanges(objects) {
    /*    
    input: objects = [{...}, {...}, {...}]
    return {
        minOverallWidth: 0,
        maxOverallWidth: 0,
        minOverallDepth: 0,
        maxOverallDepth: 0,
        minHoistwayWidth: 0,
        maxHoistwayWidth: 0,
        minHoistwayDepth: 0,
        maxHoistwayDepth: 0,
    }
    */
    // copy objects
    objects = objects.slice(0);
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