import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService } from '../../user.service';


declare var d3;
@Component({
  selector: 'rfootmark-map',
  templateUrl: './rf-map.component.html',
  styleUrls: ['./rf-map.component.css'],
})


export class RFootmarkMapComponent implements OnInit {
citys = []

  constructor(
      private router:Router,
      private userService : UserService,
  ) { 
    
  }

  ngOnInit() {
    var infor = {
      tag : ".rfootmark-map",
      width : 700 ,
      height : 700 ,
      center : [100,31],
      scale : 500,
      mapUrl : 'assets/china.json',
    }
    this.initMap(infor)

    
    

  }

initMap(infor):void{
  var width = infor.width,height = infor.height,center = infor.center,scale = infor.scale
  var svg = d3.select(infor.tag).append("svg")
  .attr("width", width)
  .attr("height", height)

  var projection = d3.geoMercator()
  .center(center)
  .scale(scale)
  .translate([width/2, height/2]);

  var path = d3.geoPath()
  .projection(projection);
  this.drawMap(svg,infor.mapUrl,projection,path)
}
drawMap(svg,mapUrl,projection,path):void{
  d3.json(mapUrl,function(error,georoot){
    console.log(1111)
    if (error) 
    return console.error(error)
    console.log(georoot)
    var china = svg.append("g");
    var provinces = china.selectAll("path")
      .data( georoot.features )
      .enter()
      .append("path")
      .attr("class","province")
      .attr("stroke","white")
      .style("fill", "rgb(128, 128, 128)")
      .attr("d", path );
  })
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