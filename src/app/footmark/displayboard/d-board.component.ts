import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'display-board',
  templateUrl: './d-board.component.html',
  styleUrls: ['./d-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

  constructor(
      private router:Router
  ) { }

  ngOnInit() {
  }

//   gotoProfile():void{
//     this.router.navigate(['/profile',this.User.id])
//   }
  
}