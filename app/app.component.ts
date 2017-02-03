import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Search } from './Search'
import { PlaceService} from './places.services';
import { Place } from './Place';

@Component({
  selector: 'my-app',
  template: `<h1>Going Places</h1>
  <div class="row">
  <!--div class="col-lg-2"></div-->
  <div class="col-lg-12">
    <div class="input-group">
      <input  [(ngModel)]="search.text" type="text" class="form-control" placeholder="Enter Address or Zip Code">
      <span class="input-group-btn">
        <button (click) = "onSubmit(search)" class="btn btn-default" type="button">Go!</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<router-outlet></router-outlet>
<!--div class="row" class="container">
  <div class="col-lg-3">
      <my-app-detail [searchInput] = "submittedSearch" [places] = "places"></my-app-detail>
  </div>

  <div class="col-lg-9">
      <my-app-main></my-app-main>
  </div>
</div-->

`,
  providers: [PlaceService],
})
export class AppComponent  {
  search: Search = new Search();
  submittedSearch: Search = new Search();
  places: Place[];

  constructor(private placeService: PlaceService, private router: Router ) {}

  onSubmit(srch: Search) {
    this.submittedSearch = new Search();
    this.submittedSearch.text = srch.text;
    this.router.navigate(['/place/' + srch.text]);
    console.log( "Submit Clicked\n");
  }


  ngOnInit(): void {
   
  }
}
