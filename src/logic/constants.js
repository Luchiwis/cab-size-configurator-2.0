const doors = {
    'accordion': 'accordion',
    'bifold': 'Bi-Fold',
    '3speed': '3 Speed sliding',
    '2speed': '2 Speed sliding',
}
const models = {
    'legacy': 'legacy',
    'panorama': 'Panorama',
    'renaissance': 'Renaissance',
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
    },
    {
        type: 'C',
        restrictions: '3speed',
    },
    {
        type: 'D',
        restrictions: '2speed',
    },
    {
        type: 'D',
        restrictions: '3speed',
    },
    {
        model: 'legacy',
        type: 'C',
        restrictions: 'bifold',
    },
    {
        model: 'legacy',
        type: 'D',
        restrictions: 'bifold',
    },
    {
        model: 'legacy',
        restrictions: '2speed',
    },
    {
        model: 'legacy',
        restrictions: '3speed',
    }
]

export { doors, models, unitSymbols, restrictedDoorCombos, WALL_THICKNESS }