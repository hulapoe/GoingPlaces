import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { LeftNav } from './left-nav.component';
import { Default } from './default.component';
import { MainContent,MainDefault } from './main-content.component';
import { PlaceService } from './places.services';

const routes: Routes = [
  {path: '', component: Default},
  {path: 'place/:search' ,  component: LeftNav ,
    children: [
      {path: '', component: MainDefault},
      {path: 'detail/:id', component: MainContent} ,
    ]
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, LeftNav, MainContent, Default, MainDefault ],
  bootstrap:    [ AppComponent ],
  providers:    [ PlaceService,
                {provide: APP_BASE_HREF, useValue: "/"},
                {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule { }
