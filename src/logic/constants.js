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

const restrictedCombos = [
    {
        type: 'C',
        door: '2speed',
    },
    {
        type: 'C',
        door: '3speed',
    },
    {
        type: 'D',
        door: '2speed',
    },
    {
        type: 'D',
        door: '3speed',
    },
    {
        model: 'legacy',
        type: 'C',
        door: 'bifold',
    },
    {
        model: 'legacy',
        type: 'D',
        door: 'bifold',
    },
    {
        model: 'legacy',
        door: '2speed',
    },
    {
        model: 'legacy',
        door: '3speed',
    },
    {
        door: 'accordion',
        landing: true,
    },
    {
        door: 'bifold',
        landing: true,
    }
]

export { doors, models, unitSymbols, restrictedCombos }