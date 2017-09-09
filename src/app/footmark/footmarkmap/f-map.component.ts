import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService } from '../../user.service';


declare var d3;
@Component({
  selector: 'footmark-map',
  templateUrl: './f-map.component.html',
  styleUrls: ['./f-map.component.css'],
})


export class FootmarkMapComponent implements OnInit {
citys = []

  constructor(
      private router:Router,
      private userService : UserService,
  ) { }

  ngOnInit() {
    // d3.json('./china.json',function(){console.log(1111)})
    // d3.select("svg").selectAll("rect")
    //   .append("rect")
    //   .attr("x",20)
    //    .attr("y",20)
    //   .attr("width",20)
    //   .attr("height",80)
    //   .attr("fill","steelblue");
    // d3.select("svg").selectAll("rect")
    // .attr("x",20)
    // .attr("y",20)
    // .attr("width",20)
    // .attr("height",80)
    // .attr("fill","steelblue");

  }

  getCoordinate(city){
    return this.userService.coordinates[city][0].split(',')
  }

initCity(location):void{
  var local = this
  this.citys.push(location.map(function(c){if(local.citys.indexOf(c)==-1){return c}}))
  console.log(this.citys)
}


//   gotoProfile():void{
//     this.router.navigate(['/profile',this.User.id])
//   }
  
}