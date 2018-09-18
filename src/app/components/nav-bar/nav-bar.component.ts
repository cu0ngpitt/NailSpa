import { Component, OnInit, Input } from '@angular/core';
import { Router }  from '@angular/router';


import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  button = false;
  dropdownState = false;

  constructor(private sidebar: SidebarService,
              public router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    if(this.button === false) {
      this.button = true;
    } else if(this.button === true) {
      this.button = false;
      this.dropdownState = false;
    }
    this.sidebar.toggleNavbar();
  }

  dropState() {
    this.dropdownState = false;
  }

  toggleDropdown() {
    if(this.dropdownState === false) {
      this.dropdownState = true;
    } else if(this.dropdownState === true) {
      this.dropdownState = false;
    }
    this.sidebar.toggleDropdown();
  }
}
