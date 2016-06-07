//import the Component and bootsrtap from angular fw
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
  selector: 'parallax',
  templateUrl: 'templates/parallax.html',
  styleUrls: ['css/parallax.css']
})


export class Parallax {
  
  constructor() {
    this.lastX = 0;
    this.lastY = 0;
    this.offsetY = -2500;
    this.offsetX = -800;
    
    //Parallax Distances
    this.minDistance = 25;
    this.distanceLayer1 = 20;
    this.distanceLayer2 = 10;
    this.distanceLayer3 = 5;
    this.distanceLayer4 = 2;
  }

  
  


  moveLayers(event) {

    //Move background if mouse has moved minimum distance to save computation
    if (Math.abs(event.pageX - this.lastX) > this.minDistance || Math.abs(event.pageY - this.lastY) > this.minDistance) {
      
      //Apply Offset
      var x = -(event.pageX + this.offsetY);
      var y = -(event.pageY + this.offsetX);

      //Move the background
      document.getElementsByClassName('layer1')[0].style.backgroundPosition = x / this.distanceLayer1 + 'px ' + y / this.distanceLayer1 + 'px';
      document.getElementsByClassName('layer2')[0].style.backgroundPosition = x / this.distanceLayer2 + 'px ' + y / this.distanceLayer2 + 'px';
      document.getElementsByClassName('layer3')[0].style.backgroundPosition = x / this.distanceLayer3 + 'px ' + y / this.distanceLayer3 + 'px';
      document.getElementsByClassName('layer4')[0].style.backgroundPosition = x / this.distanceLayer4 + 'px ' + y / this.distanceLayer4 + 'px';

      //Update the last X and Y where a shift occurred.
      this.lastX = event.pageX;
      this.lastY = event.pageY;
    }



    

  }

}
