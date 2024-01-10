import csv
import json

def convert_csv_to_json(csv_file_path, json_file_path):
    with open(csv_file_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        data = {"elevators": []}

        for row in csv_reader:
            elevator = {
                "model": row["model"].lower(),
                "type": row["type"].upper(),
                "door": row["door"],
                "landing": row["landing"].lower(),
                "minHoistwayWidth": int(row["minHoistwayWidth"]),
                "minHoistwayDepth": int(row["minHoistwayDepth"]),
                "minOverallWidth": int(row["minOverallWidth"]),
                "minOverallDepth": int(row["minOverallDepth"]),
                "maxHoistwayWidth": int(row["maxHoistwayWidth"]),
                "maxHoistwayDepth": int(row["maxHoistwayDepth"]),
                "maxOverallWidth": int(row["maxOverallWidth"]),
                "maxOverallDepth": int(row["maxOverallDepth"])
            }

            data["elevators"].append(elevator)

    with open(json_file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

# Example usage
convert_csv_to_json('guide.csv', 'guide.json')