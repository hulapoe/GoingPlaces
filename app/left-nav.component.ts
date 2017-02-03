import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';

import {Place, Places} from './Place';
import {Search} from './Search';
import {PlaceService} from './places.services';

@Component( {
  selector: 'my-app-detail',
  template: `
  <div class="row">
    <div class="col-lg-12">
      <h1 *ngIf = "searchInput"> {{searchInput.text}} </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3">
        <div class="list-group">
        <span *ngFor="let place of places">
        <a  class="list-group-item" [routerLink]="['detail',place.id]">
          <h4 class="list-group-item-heading">{{place.name}}</h4>
          <p class="list-group-item-text">Avg Time: {{place.avgTime}}</p>
        </a>
        </span>
        </div>
    </div>
    <div class="col-lg-9">
        <router-outlet></router-outlet>
    </div>
  </div>
  `
})

export class LeftNav implements OnInit {
  @Input()
  searchInput: Search;

  @Input()
  places: Place[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService) {}

  ngOnInit(): void {

    this.route.params
    .switchMap( (params: Params) => this.placeService.getPlaces2())
    .subscribe((places: Places) => this.places = places.places);

    this.route.params
    .switchMap((params: Params) => Promise.resolve( {
      text: (params['search'])}))
    .subscribe(search => this.searchInput = search);

  }

}
