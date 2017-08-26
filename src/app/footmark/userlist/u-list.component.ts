import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './u-list.component.html',
  styleUrls: ['./u-list.component.css']
})
export class UserListComponent implements OnInit {
    users = [
        {
            name:11,
            id:1,
        },
        {
            name:12,
            id:2,
        },
        {
            name:13,
            id:3,
        },
        {
            name:14,
            id:4,
        },
        {
            name:15,
            id:5,
        },
    ]
    User = {
        name:String,
        id:Number,
    }

  constructor(
      private router:Router
  ) { }

  ngOnInit() {
  }
  gotoProfile(user):void{
    this.router.navigate(['/profile',user.id])
  }
  
}