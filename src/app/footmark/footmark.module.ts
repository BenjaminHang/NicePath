import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from '../user.service';

import { FootmarkComponent } from './footmark.component';
import { UserListComponent } from './userlist/u-list.component';
import { FootmarkMapComponent } from './footmarkmap/f-map.component';
import { RFootmarkMapComponent } from './rfootmarkmap/rf-map.component';
import { DisplayBoardComponent } from './displayboard/d-board.component';
import { TimelineComponent } from './timeline/tline.component';
import { OTimelineComponent } from './onetimeline/otline.component';

@NgModule({
  declarations: [
    FootmarkComponent,
    UserListComponent,
    FootmarkMapComponent,
    DisplayBoardComponent,
    TimelineComponent,
    OTimelineComponent,
    RFootmarkMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    FootmarkComponent,
  ],
  providers: [UserService],
})
export class FootmarkModule { }