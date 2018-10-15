import { Component, OnInit, HostListener } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  show: boolean = false;

  constructor(public sidebar: SidebarService) { }

  ngOnInit() {
  }

  scrollTo(link) {
    let fragment = link;
    document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll > 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
}
