export const PRETTIFY = {
    'accordion': 'Accordion',
    'bifold': 'Bi-Fold',
    '3speed': '3 Speed Sliding',
    '2speed': '2 Speed Sliding',
    'legacy': 'Electric Drum',
    'panorama': 'Panorama',
    'renaissance': 'Roped Hydraulic',
    false: 'No',
    true: 'Yes',
    'model': 'Model',
    'type': 'Type',
    'landing': 'Landing Door',
    'door': 'Door Type',
    'A': 'A (front only)',
    'B':'B (front + rear)',
    'C':'C (front + side)',
    'D':'D (front + side)',
    'E':'E (front + rails on back wall)',
}

export const unitSymbols = {
    'mm': 'mm',
    'in': '"'
}
export const WALL_THICKNESS = 1.5; //inches

export const restrictedDoorCombos = [
    {
        type: 'C',
        restrictions: '2speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available for elevator type C`
    },
    {
        type: 'C',
        restrictions: '3speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available for elevator type C`
    },
    {
        type: 'D',
        restrictions: '2speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available for elevator type D`
    },
    {
        type: 'D',
        restrictions: '3speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available for elevator type D`
    },
    {
        model: 'legacy',
        type: 'D',
        restrictions: 'bifold',
        message: `${PRETTIFY["bifold"]} doors are not available on the ${PRETTIFY['legacy']} model on type D`
    },
    {
        model: 'legacy',
        type: 'C',
        restrictions: 'bifold',
        message: `${PRETTIFY["bifold"]} doors are not available on the ${PRETTIFY['legacy']} model on type C`
    },
    {
        model: 'legacy',
        restrictions: '2speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available on the ${PRETTIFY['legacy']} model`
    },
    {
        model: 'legacy',
        restrictions: '3speed',
        message: `${PRETTIFY["2speed"]} and ${PRETTIFY["3speed"]} doors are not available on the ${PRETTIFY['legacy']} model`
    }
]