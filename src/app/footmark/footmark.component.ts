import { Component, OnInit } from '@angular/core';

import { UserListComponent } from './userlist/u-list.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-footmark',
  templateUrl: './footmark.component.html',
  styleUrls: ['./footmark.component.css']
})
export class FootmarkComponent implements OnInit {

  constructor(
    private userService:UserService,
  ) {
    this.userService.changeUPage(1)
   }

  ngOnInit() {
  }

}
