const doors = {
    'accordion': 'Accordion',
    'bifold': 'Bi-Fold',
    '3speed': '3 Speed sliding',
    '2speed': '2 Speed sliding',
}
const models = {
    'legacy': 'Legacy',
    'panorama': 'Panorama',
    'renaissance': 'Renaissance',
}

const landing = {
    false: 'No',
    true: 'Yes',
}

const unitSymbols = {
    'mm': 'mm',
    'in': '"'
}
const WALL_THICKNESS = 1.5; //inches

const restrictedDoorCombos = [
    {
        type: 'C',
        restrictions: '2speed',
        message: '2 speed sliding doors are not available for type C'
    },
    {
        type: 'C',
        restrictions: '3speed',
        message: '3 speed sliding doors are not available for type C'
    },
    {
        type: 'D',
        restrictions: '2speed',
        message: '2 speed sliding doors are not available for type D'
    },
    {
        type: 'D',
        restrictions: '3speed',
        message: '3 speed sliding doors are not available for type D'
    },
    {
        model: 'legacy',
        type: 'C',
        restrictions: 'bifold',
        message: 'Bi-fold doors are not available on the Legacy model on type C'
    },
    {
        model: 'legacy',
        type: 'D',
        restrictions: 'bifold',
        message: 'Bi-fold doors are not available on the Legacy model on type D'
    },
    {
        model: 'legacy',
        restrictions: '2speed',
        message: '2 speed sliding doors are not available on the Legacy model'
    },
    {
        model: 'legacy',
        restrictions: '3speed',
        message: '3 speed sliding doors are not available on the Legacy model'
    }
]

export { doors, models, unitSymbols, restrictedDoorCombos, landing , WALL_THICKNESS }