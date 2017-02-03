import {Place} from './Place';
import {PlaceDetail} from './place-detail';

let obj = JSON.parse( `{"places":
  [{"id": 1, "name": "Botanical Gardens", "avgTime": 2},
  {"id": 2, "name": "Butterfly Place", "avgTime": 1},
  {"id": 3, "name": "Boating", "avgTime": 2}
],
"place_details":
[
  { "id": 1, "name": "Tower Hills Botanical Garden", "distance" : 7, "cost": 17,
  "recommendedItems":
    [
      "Walk in the Woods",
      "Orchid Exhibit",
      "Concert in the Park"
    ]
  },
  { "id": 2, "name": "Butterfly Place", "distance" : 20, "cost": 20,
  "recommendedItems":
    [
      "Watch Butterflies",
      "Learn about Butterflies",
      "Store"
    ]
  }
]

}`);

// export const PLACES: Place[] = [
//   {id: 1, name: 'Botanical Gardens', avgTime: 2},
//   {id: 2, name: 'Butterfly Place', avgTime: 1},
//   {id: 3, name: 'Boating', avgTime: 2}
// ];

export const PLACES: Place[] = obj.places;
export const PLACE_DETAILS: PlaceDetail[] = obj.place_details;
