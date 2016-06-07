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
    
  }

  moveLayers(event) {
    
    var OffsetY = -2500;
    var OffsetX = -800;
    var x = -(event.pageX + OffsetY);
    var y = -(event.pageY + OffsetX);

    document.getElementsByClassName('layer1')[0].style.backgroundPosition = x / 20 + 'px ' + y / 20 + 'px';
    document.getElementsByClassName('layer2')[0].style.backgroundPosition = x / 10 + 'px ' + y / 10 + 'px';
    document.getElementsByClassName('layer3')[0].style.backgroundPosition = x / 5 + 'px ' + y / 5 + 'px';
    document.getElementsByClassName('layer4')[0].style.backgroundPosition = x / 2 + 'px ' + y / 2 + 'px';

  }

}


//bootstrap(Parallax);