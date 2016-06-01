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
    
  }
}



bootstrap(Portfolio);