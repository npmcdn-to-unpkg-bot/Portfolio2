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
  }

  
  


  moveLayers(event) {

    //Move background if mouse has moved minimum distance to save computation
    if (Math.abs(event.pageX - this.lastX) > 25 || Math.abs(event.pageY - this.lastY) > 25) {
      
      //Apply Offset
      var x = -(event.pageX + this.offsetY);
      var y = -(event.pageY + this.offsetX);

      //Move the background
      document.getElementsByClassName('layer1')[0].style.backgroundPosition = x / 20 + 'px ' + y / 20 + 'px';
      document.getElementsByClassName('layer2')[0].style.backgroundPosition = x / 10 + 'px ' + y / 10 + 'px';
      document.getElementsByClassName('layer3')[0].style.backgroundPosition = x / 5 + 'px ' + y / 5 + 'px';
      document.getElementsByClassName('layer4')[0].style.backgroundPosition = x / 2 + 'px ' + y / 2 + 'px';

      //Update the last X and Y where a shift occurred.
      this.lastX = event.pageX;
      this.lastY = event.pageY;
    }



    

  }

}
