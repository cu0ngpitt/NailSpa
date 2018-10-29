import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sidebar: SidebarService) { }

  ngOnInit() {
  }

  onPanLeft() {
    document.getElementById('carousel-control-next').click();
  }

  onPanRight() {
    document.getElementById('carousel-control-prev').click();
  }

  testimonialPanLeft() {
    document.getElementById('test-next').click();
  }

  testimonialPanRight() {
    document.getElementById('test-prev').click();
  }
}
