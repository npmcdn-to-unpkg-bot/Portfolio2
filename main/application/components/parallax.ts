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

  clicked(event) {
    var OffsetY = -2500;
    var OffsetX = -800;

    $('.layer1').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 20 + 'px ' + y / 20 + 'px');
    });
    $('.layer2').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 10 + 'px ' + y / 10 + 'px');
    });
    $('.layer3').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 5 + 'px ' + y / 5 + 'px');
    });
    $('.layer4').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 2 + 'px ' + y / 2 + 'px');
      
    });
  }

}











bootstrap(Parallax);