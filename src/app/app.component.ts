import { Component, ElementRef, HostListener } from '@angular/core';

import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sticky: boolean = false;

  constructor(public sidebar: SidebarService,
              private eRef: ElementRef) {}

  contactBox() {
    this.sidebar.contactBox();
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll > 0) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
