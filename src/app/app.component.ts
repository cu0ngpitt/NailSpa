import { Component, ElementRef, HostListener } from '@angular/core';

import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sidebar: SidebarService,
              private eRef: ElementRef) {}

  contactBox() {
    this.sidebar.contactBox();
  }

  test() {
    console.log("test");
  }
}
