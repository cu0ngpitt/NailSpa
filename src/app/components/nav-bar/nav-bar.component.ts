import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  toggle = false;
  drop = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(toggle) {
    if (toggle === false) {
      this.toggle = true;
    } else if (toggle === true) {
      this.toggle = false;
    }
  }

  toggleDropdown(drop) {
    if (drop === false) {
      this.drop = true;
    } else if (drop === true) {
      this.drop= false;
    }
  }
}
