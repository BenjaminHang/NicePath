import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'timeline',
  templateUrl: './tline.component.html',
  styleUrls: ['./tline.component.css']
})
export class TimelineComponent implements OnInit {
  // travels = this.userService.selectedUser.travels
  // selectedTravel = this.userService.selectedTravel
  constructor(
      private router:Router,
      private userService:UserService,
  ) { }
  travels = this.userService.selectedUser.travels
  // this.userService.tPage

  ngOnInit() {
    
  }
  //   gotoProfile():void{
  //     this.router.navigate(['/profile',this.User.id])
  //   }
  selectTravel(travel):void{
    var local =this
    var index = this.userService.selectedUser.travels.indexOf(travel)
    this.userService.selectOrNot[index]=!this.userService.selectOrNot[index]
    this.userService.selectedTravels[index] = this.userService.selectOrNot[index]? this.userService.selectedUser.travels[index]:''
    console.log(this.userService.selectedTravels)
    this.userService.selectNone = this.userService.selectedTravels.every(function(x){return !x})
    travel.location.forEach(function(x){ if(local.userService.selectOrNot[index]){local.userService.selectedCitys[local.userService.uCitys.indexOf(x)] +=1}else{local.userService.selectedCitys[local.userService.uCitys.indexOf(x)] -=1}})
    // this.userService.selectedCitys.push(travel.location.map(function(c){if(local.userService.selectedCitys.indexOf(c)==-1){return c}}))
    
    
  }
  changePosition(dir){
    if(dir == 'left'){
      this.userService.tPage -=1
    }else{
      this.userService.tPage +=1
    }

  }
}