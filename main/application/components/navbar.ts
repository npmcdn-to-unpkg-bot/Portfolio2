//import the Component and bootsrtap from angular fw
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
  selector: 'navbar',
  templateUrl: 'templates/navbar.html',
  styleUrls: ['css/navbar.css']
})



class NavBar {
  constructor() {
    
  }
}



bootstrap(NavBar);