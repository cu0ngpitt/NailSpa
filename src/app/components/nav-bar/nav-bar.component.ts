import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router }  from '@angular/router';


import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('stickyNavbar') navbarElement: ElementRef;

  sticky: boolean = false;
  navbarPosition: any;

  button: boolean = false;
  dropdownState: boolean = false;

  constructor(private sidebar: SidebarService,
              public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navbarPosition = this.navbarElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.navbarPosition) {
        this.sticky = true;
        console.log(windowScroll);
        console.log(this.navbarPosition);
      } else {
        this.sticky = false;
      }
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
