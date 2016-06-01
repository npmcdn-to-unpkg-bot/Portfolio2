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
    this.name = 'Angular 2';
  }

  clicked(event) {
    var OffsetY = -2500;
    var OffsetX = -800;

    $('.background1').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 20 + 'px ' + y / 20 + 'px');
    });
    $('.background2').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 10 + 'px ' + y / 10 + 'px');
    });
    $('.background3').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 5 + 'px ' + y / 5 + 'px');
    });
    $('.background4').mousemove(function (e) {
      var x = -(e.pageX + OffsetY);
      var y = -(e.pageY + OffsetX);
      $(this).css('background-position', x / 2 + 'px ' + y / 2 + 'px');
      
    });
  }

}











bootstrap(Parallax);