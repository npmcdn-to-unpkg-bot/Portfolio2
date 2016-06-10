//import the Component and bootsrtap from angular fw
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Parallax} from '../components/parallax.ts';
import {NavBar} from '../components/navbar.ts';


@Component({
  selector: 'portfolio',
  directives: [Parallax, NavBar],
  templateUrl: 'templates/portfolio.html',
  styleUrls: ['css/portfolio.css']
})



class Portfolio {

  constructor() {
    //document.getElementsByClassName("section")[0].style.display = "none";
    //document.getElementsByClassName("section")[1].style.display = "none";
    //document.getElementsByClassName("section")[2].style.display = "none";
    //document.getElementsByClassName("section")[3].style.display = "none";

    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'horizontal',
      verticalCentered: true,
      sectionsColor: [],
      anchors: [],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
        'textColor': '#000',
        'bulletsColor': '#000',
        'position': 'right',
        'tooltips': ['section1', 'section2', 'section3', 'section4']
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

      //events
      onLeave: function (index, nextIndex, direction) {
        console.log('Switching')
      },
      afterLoad: function (anchorLink, index) {
        console.log('loaded');
        //document.getElementsByClassName("section")[index-1].style.display = "table";

      },
      afterRender: function () { },
    });

  }



}



bootstrap(Portfolio);