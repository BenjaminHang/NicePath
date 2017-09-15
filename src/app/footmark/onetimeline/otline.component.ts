import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'onetimeline',
  templateUrl: './otline.component.html',
  styleUrls: ['./otline.component.css']
})
export class OTimelineComponent implements OnInit {
  
  travels

  // selectedTravel = this.userService.selectedTravel



  constructor(
      private router:Router,
      private userService:UserService,
  ) {
    this.travels = this.userService.selectedUser.travels
  }
  
  // this.userService.tPage

  ngOnInit() {
    
  }
    // gotoProfile():void{
    //   this.router.navigate(['/profile',this.User.id])
    // }
    movestate = false

    move(index):void{
      var tlc = document.getElementById("tlc")
      var start = parseInt(tlc.style.left||"420px")
      var end = 420-(index*140)
      var cys = 10
      var time = 500
      var diff = end -start
      var local = this
      function subMove(){
        if(Math.abs(end-start) >= 0.001){
          local.movestate = true
          start += diff/cys
          tlc.style.left = start + "px"
          setTimeout(subMove,time/cys)         
        }else{
          local.movestate = false
        }
      }
      subMove()  
    }

  selectTravel(travel):void{
    var local =this
    var index = this.userService.selectedUser.travels.indexOf(travel)
    this.userService.selectOrNot[index]=!this.userService.selectOrNot[index]
    this.userService.selectedTravels[index] = this.userService.selectOrNot[index]? this.userService.selectedUser.travels[index]:''
    this.userService.selectNone = this.userService.selectedTravels.every(function(x){return !x})
    travel.location.forEach(function(x){ if(local.userService.selectOrNot[index]){local.userService.selectedCitys[local.userService.uCitys.indexOf(x)] +=1}else{local.userService.selectedCitys[local.userService.uCitys.indexOf(x)] -=1}})
    if(!this.movestate){
      this.move(index)
    }
  }
  drag():void{
    var timeline  = document.getElementById("timeline") , tlc = document.getElementById("tlc")
    timeline.onmousedown = function(e){
      var mouseX = e.pageX
      var left = parseInt(tlc.style.left||"420px")
      function move(e){  
          tlc.style.left = left + e.pageX - mouseX + 'px'
      }
      window.addEventListener('mousemove',move,false)
      function up(e){
        console.log(tlc.style.left)

        window.removeEventListener("mousemove",move,false)
        
        window.removeEventListener("mouseup",up,false)
        
      }
      window.addEventListener('mouseup',up,false)
    }
  }

  
}