import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

declare var require: any
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private imgurl = require("./ex.png")
user

  constructor(
    private userService : UserService
  ) {
    this.userService.selectedUser = this.userService.users[0]
    this.user = this.userService.selectedUser
   }

  ngOnInit() {
  }

}
