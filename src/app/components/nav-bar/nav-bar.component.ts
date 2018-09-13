import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
   trigger('navbarState', [
     state('inactive', style({
       width: '0px'
     })),
     state('active',   style({
       width: '250px'
     })),
     transition('inactive <=> active', animate('1000ms ease-in'))
   ]),
   trigger('navBar1', [
     state('inactive', style({
       transform: 'rotate(0deg) translate(0px, 0px)'
     })),
     state('active',   style({
       transform: 'rotate(-45deg) translate(-6px, 6px)'
     })),
     transition('inactive => active', animate('1000ms ease-in')),
     transition('active => inactive', animate('1000ms ease-out'))
   ]),
   trigger('navBar2', [
     state('inactive', style({
       opacity: 1
     })),
     state('active',   style({
       opacity: 0
     })),
     transition('inactive => active', animate('1000ms ease-in')),
     transition('active => inactive', animate('1000ms ease-out'))
   ]),
   trigger('navBar3', [
     state('inactive', style({
       transform: 'rotate(0deg) translate(0, 0)'
     })),
     state('active',   style({
       transform: 'rotate(45deg) translate(-6px, -7px)'
     })),
     transition('inactive => active', animate('1000ms ease-in')),
     transition('active => inactive', animate('1000ms ease-out'))
   ])
 ]
})
export class NavBarComponent implements OnInit {
  @Input() navbarState;
  @Input() navBar1;
  @Input() navBar2;
  @Input() navBar3;

  state = 'inactive';
  dropdownState = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    if(this.state === 'inactive') {
      this.state = 'active';
    } else if(this.state === 'active') {
      this.state = 'inactive';
    }
    //this.state = this.state === 'active' ? 'inactive' :'active';
  }

  toggleDropdown() {
    this.dropdownState = this.dropdownState === 'active' ? 'inactive' :'active';
  }
}
