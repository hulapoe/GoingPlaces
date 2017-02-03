import {Injectable} from '@angular/core';

import {Place, Places} from './Place';
import {PlaceDetail} from './place-detail';
import {PLACES, PLACE_DETAILS} from './Mock-places';
import {Search} from './Search';

@Injectable()
export class PlaceService {
  getPlaces(): Promise<Place[]> {
    return Promise.resolve(PLACES);
  }

  getPlaces2(): Promise<Places> {
    let places: Places = new Places();
    places.places = PLACES;
    return Promise.resolve(places);
  }

  getPlaceDetails(): Promise<PlaceDetail[]> {
    return Promise.resolve(PLACE_DETAILS);
  }

  getPlaceDetail(id: number): Promise<PlaceDetail> {
    //console.log("id: " + id);
    //console.log(PLACE_DETAILS);
    return this.getPlaceDetails().then(placeDetails => placeDetails.find(
      placeDetail => placeDetail.id == id ));
    //return this.getPlaceDetails().then(placeDetails => placeDetails[0]);
  }

  getSearch(srchTxt: string): Promise<Search> {
    console.log("srch txt: " + srchTxt);
    let search: Search = new Search();
    search.text = srchTxt;

    return Promise.resolve(search);
  }
}
