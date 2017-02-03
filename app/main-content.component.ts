import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Place} from './Place';
import {PlaceService} from './places.services';
import {PlaceDetail} from './place-detail';
import {Search} from './Search';

@Component( {
  selector: 'my-app-main',
  template: `
  <div class="row">
    <div class="col-lg-12">
      <div *ngIf = "placeDetail" class="panel panel-primary">
        <div class="panel-heading">{{placeDetail.name}}</div>
        <div class="panel-body">
          Distance: {{placeDetail.distance}} mi<br>
          Cost: {{placeDetail.cost}} per Person<br>
          <br>
          <h4>Recommended Items to do:</h4><br>
          <span *ngIf = "placeDetail">
          <li *ngFor="let rcmndn of placeDetail.recommendedItems">
          {{rcmndn}}
          </li>
          </span>
        </div>
      </div>
    </div>
  </div>
  `
})

export class MainContent implements OnInit {
  //placeDetails: PlaceDetail[];
  placeDetail: PlaceDetail;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    //console(+params['id']);
    this.route.params
    .switchMap((params: Params) => this.placeService.getPlaceDetail(+params['id']))
    .subscribe(placeDetail => this.placeDetail = placeDetail);

    // let id: number = this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.params);
    // console.log("id: " + id);
    // this.placeService.getPlaceDetail(id).then(placeDetail => this.placeDetail = placeDetail);
    // console.log(this.placeDetail);
  }
}

@Component( {
  selector: 'my-app-main-default',
  template: `
    <h4>select a place to see the details</h4>
  `
})
export class MainDefault{}
