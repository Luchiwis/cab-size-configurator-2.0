import json


def roundPartial(number, result=0.25):
    return round(number / result) * result


def mmToInches(x):
    return x / 25.4


def inchesToMm(x):
    return x * 25.4


FIELDS = [
    "maxHoistwayWidth",
    "maxHoistwayDepth",
    "maxOverallWidth",
    "maxOverallDepth",
    "minHoistwayWidth",
    "minHoistwayDepth",
    "minOverallWidth",
    "minOverallDepth",
]

with open("data.json", "r") as f:
    elevators = json.load(f)
    for i, elevator in enumerate(elevators):
        for f in FIELDS:
            # convert to inches by quarter
            elevators[i][f] = roundPartial(mmToInches(elevator[f]))

            # # convert to mm
            # elevators[i][f] = inchesToMm(elevator[f])


    print(elevators)
