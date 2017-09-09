import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Location }                 from '@angular/common';
import { UserService } from '../../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './u-list.component.html',
  styleUrls: ['./u-list.component.css']
})
export class UserListComponent implements OnInit {
    total_pages = Math.ceil(this.userService.users.length/10)
    page = this.userService.uPage
    arrow = ['\u00AB','\u00BB',]
  constructor(
      private router:Router,
      private userService:UserService,
      private location: Location,
  ) { }

  ngOnInit() {
      
  }
  gotoProfile(user):void{
    this.router.navigate(['/profile',user.id])
  }
  changeUser(user):void{
      this.userService.changeUser(user)
  }
  changeList(value):void{
      if(!/^[0-9]*$/.test(value)){
          this.page = this.userService.uPage
      }else{
        value = value<1?1:value
        this.page = value>this.total_pages?this.total_pages:value
        this.userService.changeUPage(this.page)
      }
      
  }
  
}