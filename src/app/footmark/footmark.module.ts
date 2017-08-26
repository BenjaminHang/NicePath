import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FootmarkComponent } from './footmark.component';
import { UserListComponent } from './userlist/u-list.component';
import { FootmarkMapComponent } from './footmarkmap/f-map.component';
import { DisplayBoardComponent } from './displayboard/d-board.component';
import { TimelineComponent } from './timeline/tline.component';

@NgModule({
  declarations: [
    FootmarkComponent,
    UserListComponent,
    FootmarkMapComponent,
    DisplayBoardComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FootmarkComponent,
  ],
  providers: [],
})
export class FootmarkModule { }