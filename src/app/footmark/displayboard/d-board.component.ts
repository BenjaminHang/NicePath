import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService } from '../../user.service';

declare var require: any
@Component({
  selector: 'display-board',
  templateUrl: './d-board.component.html',
  styleUrls: ['./d-board.component.css']
})
export class DisplayBoardComponent implements OnInit {
  private imgurl = require("../../img/zhengzhou.jpg")
  travels = this.userService.selectedTravels
  user = this.userService.selectedUser
  constructor(
      private router:Router,
      private userService:UserService,
  ) {

   }

  ngOnInit() {

  }

//   gotoProfile():void{
//     this.router.navigate(['/profile',this.User.id])
//   }
  
}