import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
declare var d3;
@Component({
  selector: 'footmark-map',
  templateUrl: './f-map.component.html',
  styleUrls: ['./f-map.component.css'],
})


export class FootmarkMapComponent implements OnInit {


  constructor(
      private router:Router
  ) { }

  ngOnInit() {
    d3.json("./china.json",function(error,root){
      if(error){
        return console.error(error)
      }
      console.log(root.features)
      d3.select("svg").selectAll("rect").data(root.features).enter()
      .append("rect")
      .attr("x",20)
       .attr("y",20)
      .attr("width",20)
      .attr("height",80)
      .attr("fill","steelblue");
    })
    // d3.select("svg").selectAll("rect")
    // .attr("x",20)
    // .attr("y",20)
    // .attr("width",20)
    // .attr("height",80)
    // .attr("fill","steelblue");
  }







//   gotoProfile():void{
//     this.router.navigate(['/profile',this.User.id])
//   }
  
}